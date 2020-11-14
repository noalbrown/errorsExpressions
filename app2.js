// Basic module pattern structure
// (function(){
//   // Declare private variables and functions

//   return{
//     // Declare public variables and functions
//   }
// })();

// Standard pattern
// const UICtrl = (function(){
//   let text = 'Hello World'

//   const changeText = function(){
//     const element = document.querySelector('h1')
//     element.textContent = text
//   }

//   return {
//     callChangeText: function(){
//       changeText()
//     }
//   }
// })();

// UICtrl.callChangeText()


// Revealing module pattern
// const ItemCtrl = (function () {
//   let data = []

//   function add(item) {
//     data.push(item)
//   }

//   function get(id) {
//     return data.find(item => {
//       return item.id === id;
//     })
//   }

//   return {
//     add: add,
//     get: get
//   }
// })()

// ItemCtrl.add({ id: 1, name: 'John' })



// Singleton pattern
// const Singleton = (function () {
//   let instance;

//   function createInstance() {
//     const object = new Object('Object Instance')
//     return object;
//   }

//   return {
//     getInstance: function () {
//       if (!instance) {
//         instance = createInstance
//       }
//       return instance;
//     }
//   }
// })();

// const instanceA = Singleton.getInstance();

// console.log(instanceA);



// factory pattern
function MemberFactory() {
  this.createMember = function (name, type) {
    let member;

    if (type === 'simple') {
      member = new SimpleMembership(name)
    } else if (type === 'standard') {
      member = new StandardMembership(name)
    } else if (type === 'super') {
      member = new SuperMembership(name)
    }

    member.type = type;

    member.define = function () {
      console.log(`${this.name} (${this.type}): ${this.cost}`)
    }
  }
}

const SimpleMembership = function (name) {
  this.name = name;
  this.cost = '$5'
}
const StandardMembership = function (name) {
  this.name = name;
  this.cost = '$15'
}
const SuperMembership = function (name) {
  this.name = name;
  this.cost = '$25'
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Doe', 'simple'))
members.push(factory.createMember('Jane Doe', 'standard'))
members.push(factory.createMember('Jim Doe', 'super'))

// console.log(members);

members.forEach(function (member) {
  member.define()
})