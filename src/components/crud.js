import axios from "axios";

export const Read = async (url) => {
  try {
    return await axios.get(
      `http://${import.meta.env.VITE_DB_HOST}:${
        import.meta.env.VITE_PORT
      }/${url}`
    );
  } catch (error) {
    console.error("Crud-Read-Error", error);
  }
};

export const Create = async (url, data) => {
  try {
    await axios.post(
      `http://${import.meta.env.VITE_DB_HOST}:${
        import.meta.env.VITE_PORT
      }/${url}`,
      data
    );
  } catch (error) {
    console.error("Crud-Create-Error", error);
  }
};

export const Update = async (url, data) => {
  try {
    await axios.put(
      `http://${import.meta.env.VITE_DB_HOST}:${
        import.meta.env.VITE_PORT
      }/${url}`,
      data
    );
  } catch (error) {
    console.error("Crud-Update-Error", error);
  }
};
