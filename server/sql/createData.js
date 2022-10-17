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
              order:1,
              content: {"objectIndex": "0", "ground":"10","objects":[]}
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
              available: 0
          },
      ]).into('stats')
}