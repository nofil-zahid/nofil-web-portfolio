export const isClientSideComponent = () => typeof window !== 'undefined';

export const safeJSONParser = (json: string | null) => {
  try {
    return json ? JSON.parse(json) : null;
  } catch (err) {
    console.error('safeJSONParser:-> ', err);
    return json;
  }
};
