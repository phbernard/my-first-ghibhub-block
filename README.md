# Nstal GitHub Block

[Nstal](https://nstal.dev/) is a system to turn text documentation into executable procedures.
See your regular README that asks you to run this and do that?
Nstal can complete all these tasks for you.

This [GitHub block](https://blocks.githubnext.com/) allows you to run nstallers right from GitHub.

An nstaller is basically Markdown with special markups (technically, this is an MDX document).
At first, the nstal GitHub block shows static text, as if the nstaller was a classic Markdown doc.
The only strange element: a box at the top, asking you to run a command in order to get live.

![nstaller - Not connected](./assets/not-connected.png?raw=true "Not connected")

As soon as you run this command, the nstaller comes to life. The first instruction is highlighted:

![nstaller - Connected](./assets/connected.png?raw=true "Connected")

Click it and the magic happens:

![Running a command](./assets/running.png?raw=true "Running a command")

Done!

![First instruction completed](./assets/completed.png?raw=true "First instruction completed")


Read, click, read, click... When it's over, everything was done for you *and*
you understood what just happened.

## Write you own nstaller

[Get started with nstal](https://nstal.dev/getting-started) and write your first automated
tutorial or installation procedure.
