# Introduction

At [Edust Org](https://github.com/edust-org), backend development for modules such as routes, controllers, and services was repetitive and time-consuming. Each new feature required manually creating a series of boilerplate files, which slowed down the workflow and introduced potential for inconsistencies. To streamline this process and improve productivity, we developed a custom CLI tool to automate the generation of these module files.

# Versions

- [0.1.0](#version-010-basic-module-generator)

## Version 0.1.0: Basic Module Generator

### Problem Statement

The primary issue we faced was the inefficiency caused by manually creating backend module files (routes, controllers, and services) for every new feature. This repetitive task not only consumed valuable time but also increased the likelihood of errors and inconsistencies. We needed a solution that could automatically generate these files while maintaining uniformity, saving both time and effort.

### The Decision to Use

To address this, we decided to build a **Node.js CLI tool**. Node.js was chosen because of its strong support for creating command-line utilities and its widespread use in our current stack. Additionally, leveraging Node.js allowed us to use the `fs-extra` module for file system operations like creating directories and writing files. This tool would allow developers to generate module files by simply providing a module name, reducing the manual workload and ensuring consistency.

### Challenges Faced and Solutions Provided

1. **Handling User Input**:

   - How to get users input values from cli?

     At this moment we can get value two way using `readline` or `process.argv` but we use `process.argv`. Because we don't need interact with the user.

2. **Development Testing**:

   - **Challenge**: Testing the CLI tool locally to ensure smooth operation before deployment.
   - **Solution**: We used the `npm link` command to test the package locally, simulating how users would install and use the tool globally.

3. **Work as a command**:

   - How can user run the command?

     For example after install globally this package user can run this command like `edust-cli arg-1 arg-2 arg-3` but how? I found a package form npm they run this package help by

     ```json
     "bin": {
        "edust-cli": "dist/index.js"
      },
     ```

     Now user can run a command like

     ```bash
     edust-cli arg-1 arg-2 arg-3
     ```
