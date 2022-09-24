import { EnemiesData, LoadingTipData, LevelsData, ProtagonistData, QuestData, StatsData } from "./createData.js";

export const CreateTable = async (knex) => {
  
  let counter = 6;

  await knex.schema.hasTable('enemies').then((exists)=>{
    if (exists) return

    knex.schema.createTable('enemies', (table) => {
      table.increments('id').primary();
      table.string('name',255).notNullable();
      table.string('type',255).notNullable();
      table.string('img',255).notNullable();
      table.integer('stats_id').notNullable();
    }).then(()=>{ 
        return EnemiesData(knex);
    })

    counter--;
    console.log('Enemies added')
  })

  await knex.schema.hasTable('game_loading').then((exists)=>{
    if (exists) return

    knex.schema.createTable('game_loading', (table) => {
      table.increments('id').primary();
      table.string('sentence',100).notNullable();
    }).then(()=>{ 
        return LoadingTipData(knex);
    })

    counter--;
    console.log('LoadingTip added')
  })
  
  await knex.schema.hasTable('levels').then((exists)=>{
    if (exists) return

    knex.schema.createTable('levels', (table) => {
      table.increments('id').primary();
      table.string('title',100).nullable();
      table.integer('level').notNullable();
      table.json('content').notNullable();
    }).then(()=>{ 
        return LevelsData(knex);
    })

    counter--;
    console.log('Levels added')
  })

  await knex.schema.hasTable('protagonist').then((exists)=>{
    if (exists) return

    knex.schema.createTable('protagonist', (table) => {
      table.increments('id').primary();
      table.string('name',255).notNullable();
      table.integer('img').notNullable();
      table.enu('gender', ['male', 'female']).notNullable().default('male')
      table.integer('stats_id').notNullable();
    }).then(()=>{ 
        return ProtagonistData(knex);
    })

    counter--;
    console.log('Protagonist added');
  })

  await knex.schema.hasTable('quest').then((exists)=>{
    if (exists) return

    knex.schema.createTable('quest', (table) => {
      table.increments('id').primary();
      table.string('title',100).notNullable();
      table.text('subTitle').notNullable();
      table.integer('xPos').notNullable().default(0)
      table.integer('yPos').notNullable().default(0);
      table.float('experience').notNullable().default(0);
      table.boolean('done').notNullable().default(false);
    }).then(()=>{ 
        return QuestData(knex);
    })

    counter--;
    console.log('Quest added')
  })

  await knex.schema.hasTable('stats').then((exists)=>{
    if (exists) return

    knex.schema.createTable('stats', (table) => {
      table.increments('id').primary();
      table.integer('level').notNullable().default(1);
      table.decimal('health', 8, 2).notNullable().default(10.00);
      table.float('maxHealth').notNullable().default(10)
      table.integer('strength').notNullable().default(0);
      table.integer('intellect').notNullable().default(0);
      table.integer('dexterity').notNullable().default(0);
      table.integer('constitution').notNullable().default(0);
      table.integer('wisdom').notNullable().default(0);
      table.integer('charisma').notNullable().default(0);
      table.float('experience').notNullable().default(0);
      table.integer('points').notNullable().default(0);
    }).then(()=>{ 
        return StatsData(knex);
    })

    counter--;
    console.log('Stats added')
  })

  return counter;

}