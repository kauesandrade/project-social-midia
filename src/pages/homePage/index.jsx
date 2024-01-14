import './style.css'

import Sidebar from '../../components/sidebar'
import Post from '../../components/post'

const homePage = () => {

    const postsData =[
        // {profilePhoto: 'src/assets/imagens/profile.jpg',
        // username: 'KaueAndradde',
        // timePost: '2h',
        // likes: 51,
        // commentsCount: 2,
        // description: "2K24",
        // srcPhotos: ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg']},

        // {profilePhoto: 'src/assets/imagens/profile.jpg',
        // username: 'Nevizin',
        // timePost: '21h',
        // likes: 2,
        // commentsCount: 200,
        // description: "matue",
        // srcPhotos: ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg']},
        
        // {profilePhoto: 'src/assets/imagens/profile.jpg',
        // username: 'Davibiwara',
        // timePost: '3min',
        // likes: 120,
        // commentsCount: 1,
        // description: "2K24",
        // srcPhotos: ['src/assets/imagens/profile.jpg']},
        
        {profilePhoto: 'src/assets/imagens/imgProfile.jpeg',
        username: 'MatueBanhar',
        timePost: '3min',
        likes: 120,
        commentsCount: 1,
        description: "Noitadas dos Guris",
        srcPhotos: ['src/assets/imagens/img1.jpeg', 
        'src/assets/imagens/img2.jpeg', 
        'src/assets/imagens/img3.jpeg', 
        'src/assets/imagens/img4.jpeg', 
        'src/assets/imagens/img5.jpeg', 
        'src/assets/imagens/img6.jpeg', 
        'src/assets/imagens/img7.jpeg', 
        'src/assets/imagens/img8.jpeg']},

    ]

    const posts = postsData.map((post, key)=> <Post key={key}
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
            </main>
        </>
    )
}

export default homePage;