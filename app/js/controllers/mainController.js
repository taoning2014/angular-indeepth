app.controller('MainCtrl', [function() {
    var self = this;
    self.notes = {
        shyam: {
            id: 1,
            label: 'First Note',
            assignee: 'Tao',
            done: false
        },
        Misko: {
            id: 3,
            label: 'Finished Third Note',
            assignee: 'Ning',
            done: true
        },
        brad: {
            id: 2,
            label: 'Second Note',
            done: false
        }
    };
    self.getNodeClass = function(status) {
        return {
            done: status,
            pending: !status
        }
    }
}]);
