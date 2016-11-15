const store = {teachers: []}

const Teacher = class {
  constructor(name, hometown){
    this.name = name
    this.hometown = hometown
    store.teachers = [...store.teachers, this]
  }
}

$(function() {
  $('form').on('submit', function() {
    event.preventDefault()
    let name = $("[name='teacher[name]']").val()
    let hometown = $("[name='teacher[hometown]']").val()
    new Teacher(name, hometown)
    let name = $("[name='teacher[name]']").val('')
    let hometown = $("[name='teacher[hometown]']").val('')
    let html = store.teachers.forEach((teacher) => {
      $('.container ul').append(`<li>name: ${teacher.name} hometown: ${teacher.hometown} </li>`)
    })
  })
})
