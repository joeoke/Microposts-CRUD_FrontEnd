class UI{
    constructor(){
        this.post = document.querySelector('#posts')
        this.titleInput = document.querySelector('#title')
        this.bodyInput = document.querySelector('#body')
        this.IdInput = document.querySelector('#id')
        this.postSubmit = document.querySelector('.post-submit')
        //this.formState = 'add'
    }

    showPosts(posts){
        let output=''
        posts.forEach((post) =>{
            output+=`
                <div class="card mb-3">
                    <div class="card-body">
                        <h4 class="card-title">${post.title}</h4>
                        <p class="card-text">${post.body}</p>
                        <a href="#" class="delete card-link" data-id="${post.id}">
                            <i class="fa fa-remove"></i>
                        </a>
                    </div>
                </div>
            `                     
        })

        this.post.innerHTML = output
    }

    clearFields(){
        this.titleInput.value=''
        this.bodyInput.value=''
    }

    Alert(){
        alert('New post created')    
    }    
}
export const ui = new UI ()