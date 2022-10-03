import { EnemiesData, LoadingTipData, LevelsData, ProtagonistData, QuestData, StatsData } from "./createData.js";

export const CreateTable = async (knex) => {

  //enemies
  await knex.schema.hasTable('enemies').then(async (exists)=>{
    if (exists) return

    await knex.schema.createTable('enemies', (table) => {
      table.increments('id').primary();
      table.string('name',255).notNullable();
      table.string('type',255).notNullable();
      table.string('img',255).notNullable();
      table.integer('stats_id').notNullable();
    }).then(async ()=>{
      await EnemiesData(knex);
      console.log('Enemies added')
    })
  })

  //loadingTip
  await knex.schema.hasTable('loadingTip').then(async (exists)=>{
    if (exists) return

    await knex.schema.createTable('loadingTip', (table) => {
      table.increments('id').primary();
      table.string('sentence',100).notNullable();
    }).then(async ()=>{ 
        await LoadingTipData(knex);
        console.log('LoadingTip added')
    })
  })
  
  //levels
  await knex.schema.hasTable('levels').then(async (exists)=>{
    if (exists) return

    await knex.schema.createTable('levels', (table) => {
      table.increments('id').primary();
      table.string('title',100).nullable();
      table.integer('level').notNullable();
      table.json('content').notNullable();
    }).then(async ()=>{ 
        await LevelsData(knex);
        console.log('Levels added')
    })
  })

  //protagonist
  await knex.schema.hasTable('protagonist').then(async (exists)=>{
    if (exists) return

    await knex.schema.createTable('protagonist', (table) => {
      table.increments('id').primary();
      table.string('name',255).notNullable();
      table.integer('img');
      table.enu('gender', ['male', 'female']).notNullable().default('male')
      table.integer('stats_id').notNullable();
    }).then(async ()=>{ 
        await ProtagonistData(knex);
        console.log('Protagonist added');
    }) 
  })

  //quest
  await knex.schema.hasTable('quest').then(async (exists)=>{
    if (exists) return

    await knex.schema.createTable('quest', (table) => {
      table.increments('id').primary();
      table.string('title',100).notNullable();
      table.text('subTitle').notNullable();
      table.integer('xPos').notNullable().default(0)
      table.integer('yPos').notNullable().default(0);
      table.float('experience').notNullable().default(0);
      table.boolean('done').notNullable().default(false);
    }).then(async ()=>{ 
        await QuestData(knex);
        console.log('Quest added')
    })
  })

  //stats
  await knex.schema.hasTable('stats').then(async (exists)=>{
    if (exists) return

    await knex.schema.createTable('stats', (table) => {
      table.increments('id').primary();
      table.integer('level').notNullable().default(1);
      table.decimal('health', 8, 2).notNullable().default(10.00);
      table.float('maxHealth').notNullable().default(10)
      table.decimal('mana', 8, 2).notNullable().default(10.00);
      table.float('maxMana').notNullable().default(10)
      table.integer('strength').notNullable().default(0);
      table.integer('intellect').notNullable().default(0);
      table.integer('dexterity').notNullable().default(0);
      table.integer('constitution').notNullable().default(0);
      table.integer('wisdom').notNullable().default(0);
      table.integer('charisma').notNullable().default(0);
      table.float('experience').notNullable().default(0);
      table.integer('available').notNullable().default(0);
    }).then(async ()=>{ 
        await StatsData(knex);
        console.log('Stats added')
    })
  })

}