export const createEnemies = (con) => {
  const table = `CREATE TABLE IF NOT EXISTS enemies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    img TEXT NOT NULL,
    stats_id INT NOT NULL
  )`;

  const data = `INSERT IGNORE INTO enemies (name, type, img, stats_id) VALUES
  ('Troll overlord', 'Troll', 'FantasyCharacters_Troll', 2),
  ('Orc', 'Orc', 'FantasyCharacters_orc', 3),
  ('Swarm Soldier', 'Soldier', 'FantasyCharacters_Swarm_Soldier', 4),
  ('Skeleton', 'Skeleton', 'FantasyCharacters_skeleton', 5)`

  con.query(table, (error, results) => {
      if (error) throw error;
      
      con.query(data, (error, results) => {
          if (error) throw error; 
      });

      console.log('Enemies created')
  });
}

export const createLoading = (con) => {
  const table = `CREATE TABLE IF NOT EXISTS game_loading (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sentence VARCHAR(100) NOT NULL
  )`;

  const data = `INSERT IGNORE INTO game_loading (sentence) VALUES
  ('Still faster than Windows update.'),
  ('Does Anyone Actually Read This?'),
  ('Hitting Your Keyboard Wont Make This Faster.')`

  con.query(table, (error, results) => {
      if (error) throw error;

      con.query(data, (error, results) => {
          if (error) throw error;
      });
      
      console.log('LoadingTip created');
  });   
}

export const createLevels = (con) => {
  const table = `CREATE TABLE IF NOT EXISTS levels (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) DEFAULT NULL,
    level INT NOT NULL,
    content TEXT NOT NULL
  )`;

  const data = `INSERT IGNORE INTO levels (title, level, content) VALUES
  ('hejghi', 1, '{\"walls\":[{\"pos\":[2.5,1.9999998319957535,4.5],\"rotate\":[0,1.5707963267948966,0],\"type\":[\"stone\"],\"indexKey\":\"wall0\"},{\"pos\":[-2.5,1.9999998319957537,4.5],\"rotate\":[0,1.5707963267948966,0],\"type\":[\"stone\"],\"indexKey\":\"wall1\"},{\"pos\":[4.5,1.9999999445270031,1.5],\"rotate\":[0,3.141592653589793,0],\"type\":[\"stone\"],\"indexKey\":\"wall2\"},{\"pos\":[-4.5,1.9999999601403091,1.5],\"rotate\":[0,3.141592653589793,0],\"type\":[\"stone\"],\"indexKey\":\"wall3\"},{\"pos\":[-4.5,2.0000001241229426,-3.5],\"rotate\":[0,3.141592653589793,0],\"type\":[\"stone\"],\"indexKey\":\"wall4\"},{\"pos\":[4.5,2.000000131707902,-3.5],\"rotate\":[0,3.141592653589793,0],\"type\":[\"stone\"],\"indexKey\":\"wall5\"},{\"pos\":[1.5,2.0000001443675077,-4.5],\"rotate\":[0,1.5707963267948966,0],\"type\":[\"stone\"],\"indexKey\":\"wall6\"},{\"pos\":[-3.5,2.000000168848589,-4.5],\"rotate\":[0,1.5707963267948966,0],\"type\":[\"stone\"],\"indexKey\":\"wall7\"},{\"pos\":[1.5,2.0000000422885487,-1.5],\"rotate\":[0,1.5707963267948966,0],\"type\":[\"stone\"],\"indexKey\":\"wall8\"},{\"pos\":[-1.5,1.9999999613216601,1.5],\"rotate\":[0,1.5707963267948966,0],\"type\":[\"stone\"],\"indexKey\":\"wall9\"}],\"ground\":[10,10,\"floor\"],\"player\":[-2.5,0.5500000775536565,-2.5]}')`

  con.query(table, (error, results) => {
      if (error) throw error;

      con.query(data, (error, results) => {
          if (error) throw error;
      });

      console.log('Levels created');
  });
   
}

export const createProtagonist = (con) => {
  const table = `CREATE TABLE IF NOT EXISTS protagonist (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    img INT NOT NULL,
    gender ENUM('MALE', 'FEMALE') NOT NULL,
    stats_id INT NOT NULL
  )`;

  const data = `INSERT IGNORE INTO protagonist (name, img, gender, stats_id) VALUES
  ('DennisK', 1, 'Female', 1),
  ('test', 1, 'Male', 6),
  ('MacGyver', 1, 'Male', 7)`

  con.query(table, (error, results) => {
      if (error) throw error;

      con.query(data, (error, results) => {
          if (error) throw error;
      });

      console.log('Protagonist created');
  });

}

export const createQuest = (con) => {
  const table = `CREATE TABLE IF NOT EXISTS quest(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    subTitle TEXT NOT NULL,
    Xpos INT NOT NULL DEFAULT 0,
    Ypos INT NOT NULL DEFAULT 0,
    experience INT NOT NULL DEFAULT 0,
    done TINYINT(1) NOT NULL DEFAULT 0
  )`;

  const data = `INSERT IGNORE INTO quest (title, subTitle, Xpos, Ypos, experience, done) VALUES
  ('The Darkness...', 'Children are missing from thier homes. Search for them...', 0, 0, 0, 0)`

  con.query(table, (error, results) => {
      if (error) throw error;

      con.query(data, (error, results) => {
          if (error) throw error;
      });

      console.log('Quest created');
  });
  
}

export const createStats = (con) => {
  const table = `CREATE TABLE IF NOT EXISTS stats(
    id INT AUTO_INCREMENT PRIMARY KEY,
    level INT NOT NULL DEFAULT 1,
    health DECIMAL(8,2) NOT NULL DEFAULT 10.00,
    maxHealth INT NOT NULL DEFAULT 10,
    strength INT NOT NULL DEFAULT 0,
    intellect INT NOT NULL DEFAULT 0,
    dexterity INT NOT NULL DEFAULT 0,
    constitution INT NOT NULL DEFAULT 0,
    wisdom INT NOT NULL DEFAULT 0,
    experience INT NOT NULL DEFAULT 0,
    points INT NOT NULL DEFAULT 0
  )`;

  const data = `INSERT IGNORE INTO stats (level, health, maxHealth, strength, intellect, dexterity, constitution, wisdom, experience, points) VALUES
  (15, '68.50', 100, 7, 0, 2, 0, 0, 186, 0),
  (1, '10.00', 10, 3, 3, 1, 0, 0, 10, 0),
  (1, '15.00', 15, 5, 1, 1, 0, 0, 15, 0),
  (1, '25.00', 25, 10, 0, 0, 0, 0, 35, 0),
  (1, '20.00', 20, 6, 0, 2, 0, 0, 25, 0),
  (1, '50.00', 50, 1, 4, 0, 0, 0, 55, 0)`

  con.query(table, (error, results) => {
      if (error) throw error;

      con.query(data, (error, results) => {
          if (error) throw error;
      });

      console.log('Stats created');
  });    
}