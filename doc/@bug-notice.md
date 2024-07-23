# doc of bug or quset

## ls specification

use labels to declarate question type  
note paths to file,like `path/to/file [row:col]`

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

        c.: i m so trrrrrrrr

2.  ## `U` `with 4` accoutSys | playerOnline or just interface

    > _[`sys/account.ts`](/source/component/sys/account.ts) & [`sys/gameGobal.ts`](/source/component/sys/gameGobal.ts)_

        c.: eeeeeem, too compex, i need ideas and help

3.  ## `U` `?` The division of work & collabrate

        p.: you guys really should do something to improve the work allocation and the effenciency of working

    `replys`

            c.: @p what parts you tought should be have

            p.: _@cinast_ : programming
                _@pxstate_ : programming
                _@paskaw_ : art designer, animator, programming

            c.: all right
                but r u sure to so much job

4.  ### `U` `extends 2` palyer info provision interface L4 template

        c.: i suddenly thought out an idea,
            make player infos into parts, lilke importing modules
            and then we can assemble them in certain ways, what an great idea!

5.  ## `?` `!(?)` I am not sure if this can do

    > _[`core/item.ts [81]`](/source/core/item.ts)_

        c.: emmm, can _assgin_ fn add and cover target by source?

    > _[`core/world.ts [11]`](/source/core/world.ts)_

        c.: ...

6.  ## `?` `!(?)` unkown

    > _[`runtime/main.ts [93]`](/source/runtime/main.ts)_ > _[`runtime/main.ts [95]`](/source/runtime/main.ts)_

7.  ## `?` Event.#callback

    > _[`core/events.ts`](/source/core/events.ts)_
