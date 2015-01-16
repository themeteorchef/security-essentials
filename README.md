## Meteor Security Essentials

**Slides**: http://talks.themeteorchef.com/meteor-security-essentials

Security should be a major part of every Meteor developer's planning. Without security, our applications are vulnerable to all kinds of attacks. This talk will go over some security essentials that you can (and should) use in your own applications. We'll take a look at:

#### Autopublish & Insecure
Why to remove two packages that ship with Meteor that render your app a field day for any in-the-know attacker.

#### Allow/Deny Rules
Defining rules for how the database can be manipulated from the client.

#### Publications & Subscriptions
Making use of Meteor's `publish` and `subscribe` methods to control _what_ data is accessible on the client when.

#### Check & Audit Argument Checks
Installing the [`check`](http://docs.meteor.com/#/full/check) package and its companion [`audit-argument-checks`](http://docs.meteor.com/#/full/auditargumentchecks) to validate arguments passed to server-side methods.

#### Browser Policy
Installing and configuring the [`browser-policy`](https://atmospherejs.com/meteor/browser-policy) package to control which content can be loaded in your app and whether your app can be framed.

#### Settings.json
Storing sensitive information like API keys in `settings.json` and how to share specific information with the client and the server.

#### Additional Security Techniques
Techniques that can be added in addition to what's outlined above on an as-needed basis:

- [Adding accounts](http://docs.meteor.com/#/full/accounts_api)
- [Adding schemas to your collections](http://atmospherejs.com/aldeed/collection2)
- [Using "Hooks" in Iron Router](https://github.com/EventedMind/iron-router/blob/devel/Guide.md#hooks)
- [Creating server-only methods](https://github.com/themeteorchef/server-auth-token)
- [Add client-side validation to forms](http://github.com/themeteorchef/jquery-validation)

## What's in here?
This repository includes example implementations of each of the concepts above. Each example is fairly generic, so make sure to research how the techniques we'll discuss will play into your application before you go into production.

**Note**: additional security functionality has been added to this app by the following packages:

- Audit Argument Checks - `meteor add audit-argument-checks`
- Browser Policy - `meteor add browser-policy`
- Check - `meteor add check`

Additional packages have been added as part of [Base](http://github.com/themeteorchef/base), the starter kit used to create this example.

## Resources
If you're interested in learning more about security and how to implement it in your application, the following resources are recommended:

- [Discover Meteor: Meteor and Security](https://www.discovermeteor.com/blog/meteor-and-security/)
- [Josh Owens: Meteor Security 101](http://joshowens.me/meteor-security-101/)
- [Emily Stark: Security Resources](http://security-resources.meteor.com/)
- [The Meteor Chef: Base](http://github.com/themeteorchef/base)
- [The Meteor Chef: Roll Your Own Authentication](themeteorchef.com/recipes/roll-your-own-authentication)
