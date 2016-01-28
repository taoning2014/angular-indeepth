describe('Controller: MainCtrl', function() {
    var ctrl;

    beforeEach(module('notesApp'));

    beforeEach(inject(function($controller) {
        ctrl = $controller('MainCtrl');
    }));

    it('should have itmes available on load', function() {
        expect(ctrl.notes).toEqual({
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
        });
    })

    it('should return right class based on the status', function() {
    	var actualClass = ctrl.getNodeClass(false);
    	expect(actualClass.done).toBeFalsy();
    	expect(actualClass.pending).toBeTruthy();

    	actualClass = ctrl.getNodeClass(true);
    	expect(actualClass.done).toBeTruthy();
    	expect(actualClass.pending).toBeFalsy();
    })
})
