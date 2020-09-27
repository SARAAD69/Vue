new Vue({
	el: '#exercise',
	data: {
        name: 'Artemii Chernega',
        age: '20',
        imglink: 'https://cs.sankakucomplex.com/data/sample/40/10/sample-4010008bd3f91f55038d5939e7d4b7b2.jpg?e=1601286601&m=rCMKJ5Wa4Rhxu4JJRDxhZA'
    }, 
    methods: {
        random: function() {
            return Math.random();
        }
    }
});