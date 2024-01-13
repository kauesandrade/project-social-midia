import './style.css'

import Sidebar from '../sidebar/index'
import Post from '../post/index'

const homePage = () => {

    const postsData =[
        {profilePhoto: 'src/assets/imagens/profile.jpg',
        username: 'KaueAndradde',
        timePost: '2h',
        likes: 51,
        commentsCount: 2,
        description: "2K24",
        srcPhotos: ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg']},

        {profilePhoto: 'src/assets/imagens/profile.jpg',
        username: 'Nevizin',
        timePost: '21h',
        likes: 2,
        commentsCount: 200,
        description: "matue",
        srcPhotos: ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg']},
        
        {profilePhoto: 'src/assets/imagens/profile.jpg',
        username: 'Davibiwara',
        timePost: '3min',
        likes: 120,
        commentsCount: 1,
        description: "2K24",
        srcPhotos: ['src/assets/imagens/profile.jpg']},

    ]

    const posts = postsData.map((post, key)=> <Post 
    profilePhoto= {post.profilePhoto}
    username={post.username}
    timePost={post.timePost}
    likes={post.likes}
    commentsCount={post.commentsCount}
    description={post.description}
    srcPhotos={post.srcPhotos}
    />)


    return (
        <>
            <Sidebar />
            <main className='mainHomePage'>


                {posts}


                {/* <Post
                    profilePhoto='src/assets/imagens/profile.jpg'
                    username='Kauesandrade'
                    timePost='19m'
                    likes={109}
                    commentsCount={10}
                    description='eeee'
                    srcPhotos={['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg']}
                />

                <Post
                    profilePhoto='src/assets/imagens/profile.jpg'
                    username='Kauesandrade'
                    timePost='19m'
                    likes={109}
                    commentsCount={10}
                    description='eeee'
                    srcPhotos={['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg']}
                />

                <Post
                    profilePhoto='src/assets/imagens/profile.jpg'
                    username='Kauesandrade'
                    timePost='19m'
                    likes={109}
                    commentsCount={10}
                    description='eeee'
                    srcPhotos={['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg']}
                />

                <Post
                    profilePhoto='src/assets/imagens/profile.jpg'
                    username='Kauesandrade'
                    timePost='19m'
                    likes={109}
                    commentsCount={10}
                    description='eeee'
                    srcPhotos={['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg']}
                /> */}

            </main>
            

        </>
    )
}

export default homePage;