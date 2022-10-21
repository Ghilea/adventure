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
              title: 'Menu',
              order: 1,
              content: {"objectIndex":70,"ground":"10","objects":[{"canvasObject":{"key":"floor_15","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[-4.5,2.0000001484292085,-4.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":5},"_owner":null,"_store":{}},"position":[-4.5,2.0000001484292085,-4.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":5},{"canvasObject":{"key":"floor_17","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[-3.5,2.000000150854054,-4.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":7},"_owner":null,"_store":{}},"position":[-3.5,2.000000150854054,-4.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":7},{"canvasObject":{"key":"floor_18","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[-3.5,2.0000001195040746,-3.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":8},"_owner":null,"_store":{}},"position":[-3.5,2.0000001195040746,-3.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":8},{"canvasObject":{"key":"floor_19","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[-2.5,2.000000154198531,-4.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":9},"_owner":null,"_store":{}},"position":[-2.5,2.000000154198531,-4.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":9},{"canvasObject":{"key":"floor_110","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[-2.5,2.000000127017306,-3.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":10},"_owner":null,"_store":{}},"position":[-2.5,2.000000127017306,-3.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":10},{"canvasObject":{"key":"floor_111","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[-1.5,2.0000001480482936,-4.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":11},"_owner":null,"_store":{}},"position":[-1.5,2.0000001480482936,-4.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":11},{"canvasObject":{"key":"floor_112","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[-1.5,2.0000001207956974,-3.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":12},"_owner":null,"_store":{}},"position":[-1.5,2.0000001207956974,-3.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":12},{"canvasObject":{"key":"floor_113","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[-0.5,2.0000001410378165,-4.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":13},"_owner":null,"_store":{}},"position":[-0.5,2.0000001410378165,-4.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":13},{"canvasObject":{"key":"floor_114","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[-0.5,2.0000001150792595,-3.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":14},"_owner":null,"_store":{}},"position":[-0.5,2.0000001150792595,-3.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":14},{"canvasObject":{"key":"floor_115","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[0.5,2.0000001352313213,-3.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":15},"_owner":null,"_store":{}},"position":[0.5,2.0000001352313213,-3.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":15},{"canvasObject":{"key":"floor_116","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[1.5,2.0000001538350434,-4.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":16},"_owner":null,"_store":{}},"position":[1.5,2.0000001538350434,-4.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":16},{"canvasObject":{"key":"floor_117","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[0.5,2.000000150007586,-4.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":17},"_owner":null,"_store":{}},"position":[0.5,2.000000150007586,-4.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":17},{"canvasObject":{"key":"floor_118","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[1.5,2.0000001294058753,-3.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":18},"_owner":null,"_store":{}},"position":[1.5,2.0000001294058753,-3.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":18},{"canvasObject":{"key":"floor_120","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[-3.5,2.000000084016476,-2.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":20},"_owner":null,"_store":{}},"position":[-3.5,2.000000084016476,-2.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":20},{"canvasObject":{"key":"floor_121","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[-2.5,2.000000086823052,-2.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":21},"_owner":null,"_store":{}},"position":[-2.5,2.000000086823052,-2.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":21},{"canvasObject":{"key":"floor_122","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[-1.5,2.000000093823804,-2.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":22},"_owner":null,"_store":{}},"position":[-1.5,2.000000093823804,-2.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":22},{"canvasObject":{"key":"floor_123","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[-0.5,2.000000094129239,-2.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":23},"_owner":null,"_store":{}},"position":[-0.5,2.000000094129239,-2.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":23},{"canvasObject":{"key":"floor_124","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[0.5,2.000000093628178,-2.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":24},"_owner":null,"_store":{}},"position":[0.5,2.000000093628178,-2.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":24},{"canvasObject":{"key":"floor_125","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[1.5,2.000000092033648,-2.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":25},"_owner":null,"_store":{}},"position":[1.5,2.000000092033648,-2.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":25},{"canvasObject":{"key":"wall27","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[2.5,2.000000102394466,-2.5],"rotation":[0,3.141592653589793,0],"type":"wall_1","category":"wall","objectId":27},"_owner":null,"_store":{}},"position":[2.5,2.000000102394466,-2.5],"rotation":[0,3.141592653589793,0],"type":"wall_1","category":"wall","objectId":27},{"canvasObject":{"key":"wall28","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[-2.5,1.9999999575115206,1.5],"rotation":[0,1.5707963267948966,0],"type":"wall_1","category":"wall","objectId":28},"_owner":null,"_store":{}},"position":[-2.5,1.9999999575115206,1.5],"rotation":[0,1.5707963267948966,0],"type":"wall_1","category":"wall","objectId":28},{"canvasObject":{"key":"wall29","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[2.5,1.9999999125579262,2.5],"rotation":[0,3.141592653589793,0],"type":"wall_1","category":"wall","objectId":29},"_owner":null,"_store":{}},"position":[2.5,1.9999999125579262,2.5],"rotation":[0,3.141592653589793,0],"type":"wall_1","category":"wall","objectId":29},{"canvasObject":{"key":"floor_133","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[-3.5,1.9999999883489763,0.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":33},"_owner":null,"_store":{}},"position":[-3.5,1.9999999883489763,0.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":33},{"canvasObject":{"key":"floor_134","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[-2.5,1.9999999872293117,0.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":34},"_owner":null,"_store":{}},"position":[-2.5,1.9999999872293117,0.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":34},{"canvasObject":{"key":"floor_136","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[-1.5,1.9999999837074844,0.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":36},"_owner":null,"_store":{}},"position":[-1.5,1.9999999837074844,0.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":36},{"canvasObject":{"key":"floor_137","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[0.5,1.9999999875081862,0.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":37},"_owner":null,"_store":{}},"position":[0.5,1.9999999875081862,0.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":37},{"canvasObject":{"key":"floor_138","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[1.5,2.000000016157041,-0.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":38},"_owner":null,"_store":{}},"position":[1.5,2.000000016157041,-0.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":38},{"canvasObject":{"key":"floor_139","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[1.5,2.0000000450470035,-1.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":39},"_owner":null,"_store":{}},"position":[1.5,2.0000000450470035,-1.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":39},{"canvasObject":{"key":"floor_140","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[0.5,2.0000000426157447,-1.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":40},"_owner":null,"_store":{}},"position":[0.5,2.0000000426157447,-1.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":40},{"canvasObject":{"key":"floor_141","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[0.5,2.000000023618928,-0.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":41},"_owner":null,"_store":{}},"position":[0.5,2.000000023618928,-0.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":41},{"canvasObject":{"key":"floor_142","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[1.5,1.9999999840639069,0.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":42},"_owner":null,"_store":{}},"position":[1.5,1.9999999840639069,0.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":42},{"canvasObject":{"key":"floor_143","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[-0.5,2.000000016399384,-0.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":43},"_owner":null,"_store":{}},"position":[-0.5,2.000000016399384,-0.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":43},{"canvasObject":{"key":"floor_144","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[-0.5,2.0000000468631063,-1.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":44},"_owner":null,"_store":{}},"position":[-0.5,2.0000000468631063,-1.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":44},{"canvasObject":{"key":"floor_145","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[-1.5,2.000000036461421,-1.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":45},"_owner":null,"_store":{}},"position":[-1.5,2.000000036461421,-1.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":45},{"canvasObject":{"key":"floor_146","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[-1.5,2.000000019767952,-0.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":46},"_owner":null,"_store":{}},"position":[-1.5,2.000000019767952,-0.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":46},{"canvasObject":{"key":"floor_147","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[-2.5,2.0000000199817562,-0.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":47},"_owner":null,"_store":{}},"position":[-2.5,2.0000000199817562,-0.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":47},{"canvasObject":{"key":"floor_148","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[-2.5,2.000000048566067,-1.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":48},"_owner":null,"_store":{}},"position":[-2.5,2.000000048566067,-1.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":48},{"canvasObject":{"key":"floor_149","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[-3.5,2.000000036034772,-1.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":49},"_owner":null,"_store":{}},"position":[-3.5,2.000000036034772,-1.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":49},{"canvasObject":{"key":"floor_150","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[-3.5,2.0000000224050463,-0.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":50},"_owner":null,"_store":{}},"position":[-3.5,2.0000000224050463,-0.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":50},{"canvasObject":{"key":"floor_151","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[1.5,1.9999999382230131,1.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":51},"_owner":null,"_store":{}},"position":[1.5,1.9999999382230131,1.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":51},{"canvasObject":{"key":"floor_152","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[0.5,1.9999999492902567,1.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":52},"_owner":null,"_store":{}},"position":[0.5,1.9999999492902567,1.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":52},{"canvasObject":{"key":"floor_153","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[0.5,1.9999999252535017,2.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":53},"_owner":null,"_store":{}},"position":[0.5,1.9999999252535017,2.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":53},{"canvasObject":{"key":"floor_154","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[1.5,1.9999999186685913,2.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":54},"_owner":null,"_store":{}},"position":[1.5,1.9999999186685913,2.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":54},{"canvasObject":{"key":"player56","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[-2.5,2.00000001329527,-0.5],"rotation":[0,3.141592653589793,0],"type":"player","category":"player","objectId":56},"_owner":null,"_store":{}},"position":[-2.5,2.00000001329527,-0.5],"rotation":[0,3.141592653589793,0],"type":"player","category":"player","objectId":56},{"canvasObject":{"key":"swamp_monster57","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[1.5,1.9999999482394417,1.5],"rotation":[0,3.141592653589793,0],"type":"swamp_monster","category":"swamp_monster","objectId":57},"_owner":null,"_store":{}},"position":[1.5,1.9999999482394417,1.5],"rotation":[0,3.141592653589793,0],"type":"swamp_monster","category":"swamp_monster","objectId":57},{"canvasObject":{"key":"floor_159","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[-0.5,1.9999999878313244,0.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":59},"_owner":null,"_store":{}},"position":[-0.5,1.9999999878313244,0.5],"rotation":[0,1.5707963267948966,0],"type":"floor_1","category":"floor_1","objectId":59},{"canvasObject":{"key":"torch68","ref":null,"props":{"onClick":{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"position":[-0.5,1.9999999798468098,0.5],"rotation":[0,3.141592653589793,0],"type":"torch","category":"torch","objectId":68},"_owner":null,"_store":{}},"position":[-0.5,1.9999999798468098,0.5],"rotation":[0,3.141592653589793,0],"type":"torch","category":"torch","objectId":68},{"type":"wall_1","category":"wall","position":[-4.5,2.0000000658094272,-1.5],"rotation":[0,3.141592653589793,0],"objectId":69}]}
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