var MyModule = (function () {
	
	var privateVar1 = 'SOME TEXT';
	var privateVar2 = 100;

	function privateMethodNotExposed() {
		console.log(privateVar1 + 'from a private method not exposed');
	}

	function privateMethodToExpose() {
		console.log('private method <privateMethodToExpose> called as <methodPublicOne>' );
	}

	function privateMethodToExposeTwo() {
		privateMethodNotExposed();
	}
	return {
		methodPublicOne: privateMethodToExpose,
		methodPublicUsingPrivateMethodInside: privateMethodToExposeTwo
	}
}());

MyModule.methodPublicOne();
MyModule.methodPublicUsingPrivateMethodInside();
MyModule.privateMethodNotExposed(); // this not work, nice

// todo: Use real example