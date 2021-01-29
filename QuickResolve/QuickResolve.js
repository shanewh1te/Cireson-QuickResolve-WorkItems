app.custom.formTasks.add('Incident', null, function(formObj, viewModel) {
    formObj.boundReady(function() {
        if (window.location.href.indexOf("/Incident/New/") !== -1 && viewModel.Status.Id === "2b8830b6-59f0-f574-9c2a-f4b4682f1681") {
            viewModel.set("ResolvedDate", new Date().toISOString());
            viewModel.set("RelatesToTroubleTicket", {
				"BaseId": session.user.Id,
				"Name": session.user.Name
			});
        }
    });
});

app.custom.formTasks.add('ServiceRequest', null, function(formObj, viewModel) {
    formObj.boundReady(function() {
        if (window.location.href.indexOf("/ServiceRequest/New/") !== -1 && viewModel.IsQuickComplete == true) {
            viewModel.set("CompletedDate", new Date().toISOString());
            pageForm.viewModel.set("Status",{
                "Name": "Completed",
                "Id": app.constants.workItemStatuses.ServiceRequest.Completed
            });
        }
    });
});