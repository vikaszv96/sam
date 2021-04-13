var familyHead = {
  name: 'Shan',
  gender:'Male',
  grandfather:'',
  grandmother:'',
  father:'',
  mother:'',
  wife: {
    name:'Anga',
    children : [
    {
      name: 'Chit',
      gender:'Male',
      grandfather:'',
      grandmother:'',
      father:'Shan',
      mother:'Anga',
      wife:{
      name:'Amba',
      children :[
        {
          name: 'Dritha',
          gender:'Female',
          grandfather:'Shan',
          grandmother:'Anga',
          father:'Chit',
          mother:'Amba',
          husband:'Jaya',
          children:[
            {
              name: 'Yodhan',
              gender:'Male',
              grandfather:'Chit',
              grandmother:'Amba',
              father:'Jaya',
              mother:'Dritha',
              wife:{
              name:'',
              children:[]
              },
            }
          ]
        },
        {
          name: 'Tritha',
          gender:'Female',
          grandfather:'Shan',
          grandmother:'Anga',
          father:'Chit',
          mother:'Amba',
          husband:'',
          children:[]
        },
        {
          name: 'Vritha',
          gender:'Male',
          grandfather:'Shan',
          grandmother:'Anga',
          father:'Chit',
          mother:'Amba',
          wife:{
          name:'',
          children:[]
          },
        }
      ]
    }
    },
    {
      name: 'Ish',
      gender:'Male',
      grandfather:'',
      grandmother:'',
      father:'Shan',
      mother:'Anga',
      wife: {
        name:'',
        children:[]
      }
    },
    {
      name: 'Vich',
      gender:'Male',
      grandfather:'',
      grandmother:'',
      father:'Shan',
      mother:'Anga',
      wife:{
      name:'Lika',
      children:[
        {
          name: 'Vila',
          gender:'Female',
          grandfather:'Shan',
          grandmother:'Anga',
          father:'Vich',
          mother:'Lika',
          husband:'',
          children:[]
      },
      {
        name: 'Chika',
        gender:'Female',
        grandfather:'Shan',
        grandmother:'Anga',
        father:'Vich',
        mother:'Lika',
        husband:'',
        children:[]
    }
    ]
    }
    },
    {
      name: 'Aras',
      gender:'Male',
      grandfather:'',
      grandmother:'',
      father:'Shan',
      mother:'Anga',
      wife: {
        name:'Chitra',
        children:[
        {
          name: 'Jnki',
          gender:'Female',
          grandfather:'Shan',
          grandmother:'Anga',
          father:'Aras',
          mother:'Chitra',
          husband:'Arit',
          children:[
            {
              name: 'Laki',
              gender:'Male',
              grandfather:'Aras',
              grandmother:'Chitra',
              father:'Arit',
              mother:'Jnki',
              wife:{
                name:'',
                children:[]
              }
            },
            {
              name: 'Lavnya',
              gender:'Female',
              grandfather:'Aras',
              grandmother:'Chitra',
              father:'Arit',
              mother:'Jnki',
              husband:'',
              children:[]
            }
          ]
      },
      {
        name: 'Ahit',
        gender:'Male',
        grandfather:'Shan',
        grandmother:'Anga',
        father:'Aras',
        mother:'Chitra',
        wife: {
          name:'',
          children:[]
        },
    }
    ]
    }
    },
    {
      name: 'Satya',
      gender:'Female',
      grandfather:'',
      grandmother:'',
      father:'Shan',
      mother:'Anga',
      husband:'Vyan',
      children:[
        {
          name: 'Asva',
          gender:'Male',
          grandfather:'Shan',
          grandmother:'Anga',
          father:'Vyan',
          mother:'Satya',
          wife:{
          name:'Satvy',
          children:[
            {
              name: 'Vasa',
              gender:'Male',
              grandfather:'Vyan',
              grandmother:'Satya',
              father:'Asva',
              mother:'Satvy',
              wife: {
                name:'',
                children:[]
              },
            }
          ]
        }
        },
        {
          name: 'Vyas',
          gender:'Male',
          grandfather:'Shan',
          grandmother:'Anga',
          father:'Vyan',
          mother:'Satya',
          wife:{
          name:'Krpi',
          children:[
            {
              name: 'Kriya',
              gender:'Male',
              grandfather:'Vyan',
              grandmother:'Satya',
              father:'Vyas',
              mother:'Krpi',
              wife: {
                name:'',
                children:[]
              },
            },
            {
              name: 'Krithi',
              gender:'Female',
              grandfather:'Vyan',
              grandmother:'Satya',
              father:'Vyas',
              mother:'Krpi',
              husband:'',
              children:[]
            }
          ]
        }
        },
        {
          name: 'Atya',
          gender:'Female',
          grandfather:'Shan',
          grandmother:'Anga',
          father:'Vyan',
          mother:'Satya',
          husband:'',
          children:[]
        }
      ]
    }
  ]
}
}

module.exports = {
  familyHead
}
