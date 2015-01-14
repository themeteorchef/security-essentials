## Meteor Security Essentials

**Slides**: http://talks.themeteorchef.com/meteor-security-essentials

Security should be a major part of every Meteor developer's planning. Without security, our applications are vulnerable to all kinds of attacks. This talk will go over some security essentials that you can (and should) use in your own applications. We'll take a look at:

#### Autopublish & Insecure
Why to remove two packages that ship with Meteor that render your app a field day for any in-the-know attacker.

#### Allow/Deny Rules
Defining rules for how the database can be manipulated from the client.

#### Publications & Subscriptions
Making use of Meteor's `publish` and `subscribe` methods to control _what_ data is accessible on the client when.

#### Schemas
Adding schemas to your collections to ensure that only the data you specify is allowed in the database.

#### Check
Installing the [`check`](http://docs.meteor.com/#/full/check) package and its companion [`audit-argument-checks`](http://docs.meteor.com/#/full/auditargumentchecks) to validate arguments passed to server-side methods.

#### Server-Only Methods
Ensuring that certain (destructive) methods can only be called from the server.

#### Browser Policy
Installing and configuring the [`browser-policy`](https://atmospherejs.com/meteor/browser-policy) package to control which content can be loaded in your app and whether your app can be framed.

#### Routing Filters
Using [`iron:router`](https://atmospherejs.com/iron/router)'s `onBeforeAction` option to create filters for controlling what routes user's can access in your application and when.

#### Settings.json
Storing sensitive information like API keys in `settings.json` and how to share specific information with the client and the server.

## What's in here?
This repository includes example implementations of each of the concepts above. Each example is fairly generic, so make sure to research how the techniques we'll discuss will play into your application before you go into production.

**Note**: additional security functionality has been added to this app by the following packages:

- Audit Argument Checks - `meteor add audit-argument-checks`
- Browser Policy - `meteor add browser-policy`
- Check - `meteor add check`
- Collection2 - `meteor add aldeed:collection2`

Additional packages have been added as part of [Base](http://github.com/themeteorchef/base), the starter kit used to create this example.

## Resources
If you're interested in learning more about security, the following resources are recommended:

- [Discover Meteor: Meteor and Security](https://www.discovermeteor.com/blog/meteor-and-security/)
- [Josh Owens: Meteor Security 101](http://joshowens.me/meteor-security-101/)
- [Emily Stark: Security Resources](http://security-resources.meteor.com/)
- [Meteor Development Group: Securing Meteor apps with Content Security Policy](https://www.meteor.com/blog/2013/10/27/defense-in-depth-securing-meteor-apps-with-content-security-policy)
- [Ongoworks: Meteor Security (Package)](https://github.com/ongoworks/meteor-security)
