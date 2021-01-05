(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{372:function(e,t,a){"use strict";a.r(t);var n=a(44),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"design-philosophy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#design-philosophy"}},[e._v("#")]),e._v(" Design Philosophy")]),e._v(" "),a("p",[e._v("Tutara is designed based on a set of requirements and ideas made by the\ndevelopers of the language. This document is a list of these in non descriptive\norder.")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("The language puts the developer in a position to write a scripts in a quick\nmanner by supporting an easy and fast to write syntax.")])]),e._v(" "),a("p",[e._v("A lot of keywords in the syntax are based on shorthands. A variable is either\ndeclared by writing "),a("code",[e._v("val")]),e._v(" or "),a("code",[e._v("var")]),e._v(". This in combination with\n"),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Type_inference",target:"_blank",rel:"noopener noreferrer"}},[e._v("type inference"),a("OutboundLink")],1),e._v(" brings a fast\nway  of working with data in scripts. The language itself is statically typed\nto prevent bugs before execution of the code. When defining a lot of variables\nwithout a type it might become unclear wich type of data is stored there.\nBy using static typing the interpreter knows the actual type of a variable and\ncan provide information on what properties or methods are available on the\ntype using autocomplete in the IDE.")]),e._v(" "),a("p",[e._v("By providing a variety of syntactic sugar options. Developers can simplify\ntheir scripts a lot. Options like writing "),a("code",[e._v("foo += 1")]),e._v(" instead of\n"),a("code",[e._v("foo = foo + 1")]),e._v(" is an easy example of this. But this can become more complex\nlike large if statements that can be rewritten using a match or a "),a("code",[e._v("loop {}")]),e._v("\nthat is easier to read then "),a("code",[e._v("while(true) {}")]),e._v(". By allowing multiple ways of\nwriting the same behavior a developer can create easier to read code which\nhelps with the maintainability of a project.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Developers should be able to learn the language with ease.")])]),e._v(" "),a("p",[e._v("The language can be classified as a C-like language as the basic syntax looks\na lot like the C programming language. A lot of the popular languages in use\ntoday are similar in their syntax. From a general-purpose language like\nPython to an enterprise language like Java or C#. They all share a common set\nof syntactic features like looping, condition and expressions. Tutara follows\nthis set with some small differences to make it easy to understand the\nlanguage for developers.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Installing Tutara should be fast and straight forward.")])]),e._v(" "),a("p",[e._v("The goal is for developers to install and configure Tutara with ease. We do\nnot want complex installing processes where the developer has to set a\nvariety of environment variables, download dependencies or change anything in\nthe OS.")]),e._v(" "),a("p",[e._v("It should be a plug and play style of system. You get the Tutara CLI and you\ncan immediately write a script and execute it.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("The goal of Tutara scripts is to automate small tasks")])]),e._v(" "),a("p",[e._v("When using Tutara there should be a focus on automating simple tasks. All\nusers have some form of task they execute by hand that can be automated. It\nmight be hashing a certain value or renaming files and folders in the\nfilesystem. Developers should be able to use Tutara script for solving these\n'time wasters'.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Scripts are written for a specific context in their respective\nenvironments.")])]),e._v(" "),a("p",[e._v("When automating tasks you usually work with input data, perform some\noperations and get different data back. The principle here is that it works\nwithin a specified "),a("em",[e._v("context")]),e._v(". This can for example be an HTTP-context where\nthe script has access to the HTTP request and response. The developer writes\nthe script based on these parameters. Its important that contexts are\nversitile and can be expanded upon to use Tutara as an automation platform.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Scripts run in a sanbox within their environments and may have restricted\ncapabilities.")])]),e._v(" "),a("p",[e._v("Tutara is an interpreted language. Meaning it executes while reading scripts.\nIt means that you only have to write the desired script which is passed to\nthe CLI and it works. No additional configuration or handling of binaries is\nneeded.")]),e._v(" "),a("p",[e._v("On a surface level this may imply a drawback for the system. Scripts are text\nfiles that have to be converted into machine code when it is called. The\nplatform can cache the machine code for faster execution by sending compiled\nscripts to the virtual machine.")]),e._v(" "),a("p",[e._v("Scripts run within a specific context that gives acces to what it needs.\nMeaning if a script in the HTTP context needs access to the file system for\ncertain reasons it has to specifically get this premission. When it does not\nhave this permission it will throw runtime errors. This reduces the footprint\nof the script and adds an abritray layer of 'security' for the scripts.\nPlatforms can optionally add configuration files to enable or disable\npermissions.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Tutara is Free and Open Source Software (FOSS) first.")])]),e._v(" "),a("p",[e._v("In the current development ecosystem there are a lot of proprietary tools and\nlarge companies making software that is closed to the outside of the world. We\nbelieve that this is the correct way for our language. There are thousands of\nOpen Source projects out there that are used every day by small developers and\nhuge companies. We as a community should endorse these developers as their\ncontributions to our field are extremely important for its survival.")]),e._v(" "),a("p",[e._v("Therefor we made the inevitable decision to develop Tutara as Free and\nOpen Source Software with a matching license.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Tutara is experimental until we consider it stable.")])]),e._v(" "),a("p",[e._v("The project started out as a challenge to understand low level programming.\nChoices that were made in the past should be reconsidered when in doubt.\nSyntax may drastically change if deemed insufficient for the design\nphilosophy.")]),e._v(" "),a("p",[e._v("We're always open to honest feedback and appreciate all the help from\nthird-parties. Even for bad decisions, we are also humans and we can make\nmistakes. We are always open for learning new concepts to improve our craft.")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);