# Issue Format Regulations

## Issue Specifications

Specify the path to the file where issues occurs
e.g.: `path/to/file [row:col]`

```markdown
n. ##`label` xxx

    > [path]()`

    quest:xxxx
```

-   ### `bugs`

    mark with `!` label

-   ### `completed`

    mark with `C` label

-   ### `uncompleted`

    mark with `U` label

-   ### `confused`

    mark with `?` label

-   ### `changed`

    mark with `>>` or `->` label

-   ### `extends`

    mark with `extends from []()` label

-   ### `connected`

    mark with `with` label

# list

1.  ## `C` `?` Scene & Transfer connection

    > _[`core/scene.ts`](/source/core/scene.ts) & [`core/building.ts [76+]`](/source/core/buildings.ts)_

        c.: I'm really tired...

2.  ## `U` `with 4` accoutSys | playerOnline or just interface

    > _[`sys/account.ts`](/source/component/sys/account.ts) & [`sys/gameglobal.ts`](/source/component/sys/gameglobal.ts)_

        c.: Well I think i need some aid on ideas or coding.

3.  ## `U` `?` The division of work & collaborate

        p.: You guys really should do something to improve the work allocation and the effienciency of work.

    `replies`

            c.: @p What parts of jobs you think we should have?

            p.: _@cinast_ : programming
                _@pxstate_ : programming
                _@paskaw_ : art designer, animator, programming

            c.: Ok then.
                Just noticing, we really need that much job??

4.  ### `U` `extends 2` player info provision interface L4 template

        c.: Well a idea suddenly struck me:
            make player infos into parts, like importing modules
            and then we can assemble them in certain ways, what an great idea!

5.  ## `?` `!(?)` I am not sure if this can do

    > _[`core/item.ts [81]`](/source/core/item.ts)_

        c.: emmm, can _assign_ fn add and cover target by source?

    > _[`core/world.ts [11]`](/source/core/world.ts)_

        c.: ...

6.  ## `?` `!(?)` unkown

    > _[`runtime/main.ts [93]`](/source/runtime/main.ts)_ > _[`runtime/main.ts [95]`](/source/runtime/main.ts)_

7.  ## `?` Event.#callback

    > _[`core/events.ts`](/source/core/events.ts)_

<!-- 8. ## `!` 伙计们，项目爆了 -->
