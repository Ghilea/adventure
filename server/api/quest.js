export const getQuest = async (knex, res, x, y) => {
  try {
    await knex
      .select("*")
      .where("xPos", x)
      .andWhere("yPos", y)
      .from("quest")
      .then((query) => {
        return (
          res
            .code(200)
            //.header('Content-Type', 'application/json; charset=utf-8')
            .send(query)
        );
      });
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};
