import 'reflect-metadata';

import {Ctx, Query, Resolver} from 'type-graphql';
import type {Context} from 'src/utils/Context';

@Resolver()
export class HelloResolver {
  @Query(() => String)
  hello(@Ctx() {req, res}: Context) {
    const helloCount = parseInt(req.cookies.helloCount || '0') + 1;
    res.cookie('helloCount', helloCount.toString());
    return `hello world ${helloCount}`;
  }
}
