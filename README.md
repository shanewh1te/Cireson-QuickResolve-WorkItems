# Cireson-QuickResolve-WorkItems
Be able to create quick resolve/complete tickets and forget about them!

A very common issue I see with customers is people on the Service Desk typically have a lot of standard nature of tickets which they tend to close off straight away, whether it be an account locked or a password reset and it can take time to open a ticket, save it, reopen the ticket, save it etc.. And even more so on a Service Request because you need to wait for workflows to run!

But no more! This solution will help alleviate a lot of that sitting around just to complete/resolve a ticket, you can just create the ticket and forget about it!


So there are a few components to this:

Install the ManagementPack (Cireson.WorkItem.ServiceRequest.Extensions.QuickComplete.mp), this is a class Extension for the SR class to add a Boolean (True of False) field to the class. This is used to toggle whether a Service Request is a quick complete SR or not.

Copy the QuickResolve Folder from the files to C:\inetpub\CiresonPortal\CustomSpace

Copy the contents of Custom.js to your Custom.js file in the above location

Once you have done all of this you will be good to go! I have also attached a word document explaining the usage for each example, an Incident and a Service Request.
