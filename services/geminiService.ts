import { GoogleGenAI, Type } from "@google/genai";
import { Theme, Entity, NameLength, GenerationMode } from "../types";

const createClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY environment variable is not set.");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateEntities = async (
  theme: Theme, 
  length: NameLength, 
  mode: GenerationMode
): Promise<Entity[]> => {
  try {
    const ai = createClient();
    
    let basePrompt = "";
    let systemRole = "";

    const lengthInstruction = length === 'SHORT'
      ? 'The names MUST be "short" (brandable, 1-2 syllables, catchy startup style). Examples: "Flux", "Zen", "Core".'
      : 'The names MUST be "long" (technical, descriptive, compound words). Examples: "Quantum-Stabilizer", "Neuro-Link-Pro".';

    if (mode === 'TOOL') {
      systemRole = "You are JURA, a product design AI from 2029. You conceptualize advanced physical hardware, gadgets, and tools.";
      basePrompt = `
        Generate 10 innovative physical tool/hardware concepts for the year 2029.
        Criteria:
        1. ${lengthInstruction}
        2. The industry sector is "${theme}".
        3. Context: It is 2029. Tech involves haptics, smart materials, AR glasses, and micro-robotics.
        4. "Designation" should be a Model Number (e.g., MK-IV, X-29).
        5. "Description" must describe the physical device and its cutting-edge utility.
        6. "Primary Function" is the device category (e.g. "Wearable", "Power Tool").
      `;
    } else {
      systemRole = "You are JURA, a software architect from 2029. You conceptualize next-gen apps and digital platforms.";
      basePrompt = `
        Generate 10 innovative app/software concepts for the year 2029.
        Criteria:
        1. ${lengthInstruction}
        2. The industry sector is "${theme}".
        3. Context: It is 2029. Tech involves AI agents, holographic UIs, and seamless connectivity.
        4. "Designation" should be a Version string (e.g., v4.0, Alpha-Build).
        5. "Description" must describe the user experience and the problem it solves digitally.
        6. "Primary Function" is the App Category (e.g. "SaaS", "AR Utility").
      `;
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: basePrompt,
      config: {
        systemInstruction: systemRole,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              name: {
                type: Type.STRING,
                description: "The generated product name.",
              },
              designation: {
                type: Type.STRING,
                description: mode === 'TOOL' ? "Model number" : "Version number",
              },
              description: {
                type: Type.STRING,
                description: "Description of the product's innovation.",
              },
              primaryFunction: {
                type: Type.STRING,
                description: "Category or Type.",
              },
            },
            required: ["name", "designation", "description", "primaryFunction"],
          },
        },
      },
    });

    const jsonText = response.text;
    if (!jsonText) {
      throw new Error("No content received from Gemini.");
    }

    const rawData = JSON.parse(jsonText);
    
    // Add client-side IDs
    return rawData.map((item: Omit<Entity, 'id'>) => ({
      ...item,
      id: crypto.randomUUID(),
    }));

  } catch (error) {
    console.error("Error generating entities:", error);
    throw error;
  }
};