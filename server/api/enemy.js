export const getEnemy = async (knex, res) => {
  try {
    await knex
      .select(
        "name",
        "type",
        "experience",
        "level",
        "img",
        "health",
        "maxHealth",
        "strength",
        "intellect",
        "dexterity",
        "constitution",
        "wisdom"
      )
      .orderByRaw("RAND()")
      .limit(1)
      .join("stats", "enemy.stats_id", "id")
      .from("enemies")
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
