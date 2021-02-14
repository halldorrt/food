create table recipes.recipes (
  id            uuid primary key,
  name          text not null,
  description   text not null,
  picture_url   text not null,
  status        recipe_status_enum not null,
  created_time  timestamptz not null default now(),

  constraint uqc_recipe_name unique (name)
);