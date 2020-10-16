import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import { Post } from './entities/Post';
import microConfig from './mikro-orm.config';

const main = async () => {
  // connect to the db
  const orm = await MikroORM.init(microConfig);
  // run migration
  await orm.getMigrator().up();
  // run sql
  //   const post = orm.em.create(Post, { title: 'my first post' });
  //   await orm.em.persistAndFlush(post);

  // get all our posts
  //   const posts = await orm.em.find(Post, {});
  //   console.log(posts);
};

main().catch((err) => {
  console.error(err);
});
