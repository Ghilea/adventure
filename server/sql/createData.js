export const EnemiesData = async (knex) => {
    return await knex.insert([
          {
              name:'Troll overlord', 
              type:'Troll', 
              img:'FantasyCharacters_Troll', 
              stats_id:2
          },
          {
              name:'Orc', 
              type:'Orc', 
              img:'FantasyCharacters_orc', 
              stats_id:3
          },
          {
              name:'Swarm Soldier', 
              type:'Soldier', 
              img:'FantasyCharacters_Swarm_Soldier', 
              stats_id:4
          },
          {
              name:'Skeleton', 
              type:'Skeleton', 
              img:'FantasyCharacters_skeleton', 
              stats_id:5
          }
      ]).into('enemies')
}

export const LoadingTipData = async (knex) => {
    return await knex.insert([
          {
              sentence:'Still faster than Windows update.'
          },
          {
              sentence:'Does Anyone Actually Read This?'
          },
          {
              sentence:'Hitting Your Keyboard Wont Make This Faster.'
          },
      ]).into('loadingTip')
}

export const LevelsData = async (knex) => {
    return await knex.insert([
          {
              title:'test',
              level:1,
              content:'{\"walls\":[{\"pos\":[2.5,1.9999998319957535,4.5],\"rotate\":[0,1.5707963267948966,0],\"type\":[\"stone\"],\"indexKey\":\"wall0\"},{\"pos\":[-2.5,1.9999998319957537,4.5],\"rotate\":[0,1.5707963267948966,0],\"type\":[\"stone\"],\"indexKey\":\"wall1\"},{\"pos\":[4.5,1.9999999445270031,1.5],\"rotate\":[0,3.141592653589793,0],\"type\":[\"stone\"],\"indexKey\":\"wall2\"},{\"pos\":[-4.5,1.9999999601403091,1.5],\"rotate\":[0,3.141592653589793,0],\"type\":[\"stone\"],\"indexKey\":\"wall3\"},{\"pos\":[-4.5,2.0000001241229426,-3.5],\"rotate\":[0,3.141592653589793,0],\"type\":[\"stone\"],\"indexKey\":\"wall4\"},{\"pos\":[4.5,2.000000131707902,-3.5],\"rotate\":[0,3.141592653589793,0],\"type\":[\"stone\"],\"indexKey\":\"wall5\"},{\"pos\":[1.5,2.0000001443675077,-4.5],\"rotate\":[0,1.5707963267948966,0],\"type\":[\"stone\"],\"indexKey\":\"wall6\"},{\"pos\":[-3.5,2.000000168848589,-4.5],\"rotate\":[0,1.5707963267948966,0],\"type\":[\"stone\"],\"indexKey\":\"wall7\"},{\"pos\":[1.5,2.0000000422885487,-1.5],\"rotate\":[0,1.5707963267948966,0],\"type\":[\"stone\"],\"indexKey\":\"wall8\"},{\"pos\":[-1.5,1.9999999613216601,1.5],\"rotate\":[0,1.5707963267948966,0],\"type\":[\"stone\"],\"indexKey\":\"wall9\"}],\"ground\":[10,10,\"floor\"],\"player\":[-2.5,0.5500000775536565,-2.5]}'
          }
      ]).into('levels')
}

export const ProtagonistData = async (knex) => {
    return await knex.insert([
          {
              name:'DennisK', 
              img:1, 
              gender:'Female', 
              stats_id:1
          },
          {
              name:'test', 
              img:1, 
              gender:'Male', 
              stats_id:6
          },
          {
              name:'MacGyver', 
              img:1, 
              gender:'Male', 
              stats_id:7
          },
      ]).into('protagonist')
}

export const QuestData = async (knex) => {
    return await knex.insert([
          {
              title: 'The Darkness...',
              subTitle: 'Children are missing... Search for them.',
              xPos: 0,
              yPos: 0,
              experience: 0,
              done: false,
          },
      ]).into('quest')
}

export const StatsData = async (knex) => {
    return await knex.insert([
          {
              level: 15,
              health: 68.50,
              maxHealth: 100,
              strength:  7,
              intellect: 0,
              dexterity: 2,
              constitution: 2,
              wisdom: 0,
              charisma: 0,
              experience: 186,
              points: 0
          },
      ]).into('stats')
}