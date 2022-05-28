
var mainTitle = document.createElement('h1')
mainTitle.textContent = "Posts.js"
mainTitle.setAttribute('class', 'my-5 justify-content-center mt-5 text-center')


var elsUl = document.createElement('ul')
elsUl.setAttribute('class', 'd-flex flex-wrap gap-5 justify-content-center')


for (var i = 0; i < posts.length; i++){
    var userInfo = document.createElement('li')
    userInfo.setAttribute('class', 'd-flex flex-column p-4 rounded-4 border vw-35 element-hover')

    var userTitle = document.createElement('h2')
    userTitle.textContent = posts[i].title;
    userTitle.setAttribute('class', 'me-auto')

    var userId = document.createElement('h2')
    userId.textContent = "User Id:"+posts[i].userId;
    userId.setAttribute('class', 'me-auto')

    var Id = document.createElement('h3')
    Id.textContent = "Id:"+posts[i].id
    Id.setAttribute('class', 'me-auto')

    var userBody = document.createElement('h5')
    userBody.textContent = "Info:"+posts[i].body
    userBody.setAttribute('class', 'gray me-auto mt-auto')

    userInfo.appendChild(userTitle)
    userInfo.appendChild(userId)
    userInfo.appendChild(Id)
    userInfo.appendChild(userBody)

    elsUl.appendChild(userInfo)

}

document.body.appendChild(mainTitle)
document.body.appendChild(elsUl)