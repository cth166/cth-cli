# cth-cli

A backend cli based on `koa` and `sequelize-typescript`.

initial project in [my repo](https://github.com/cth166/sqts-template)



## Installation

```bash
npm install cth-cli -g
```



## Commands

  * `init [project_name]`: create a straightforward and clean project.(Default is `cth-backend`)

    if project_name is `testdemo`,you will download `testdemo` branch in my repo which has more examples but It is no benefit to you to develop you own project.

    ```bash
    cth-cli init mydemo01
    
    cth-cli init testdemo
    ```

  * `add <model_name>`: add a clean table model only with `name` attribute in `src/db/models` and a simple router in `src/routers`.

    Then you can expand them according to your ideas.

    ```bash
    cth-cli add player
    ```



## Options

  * `--gitee`: download initial template from gitee.(Default is github)

    ```bash
    cth-cli init mydemo01 --gitee
    
    cth-cli init testdemo --gitee
    ```

Also you can compare my testdemo with [**official example**.](https://github.com/RobinBuschmann/sequelize-typescript-example)
