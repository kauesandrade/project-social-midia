import './style.css'

import { MdBookmarkBorder } from "react-icons/md";
import { MdOutlineBookmark } from "react-icons/md";
import { BsFillGridFill } from "react-icons/bs";
import { BsGrid } from "react-icons/bs";
import { BsFillFilePersonFill } from "react-icons/bs";
import { BsFilePerson } from "react-icons/bs";

const navbarProfile = ({selection, hadleClickSelection}) => {

    return (
        <nav className='navProfilePosts'>
            <div className='divSelectionPosts flex' onClick={() => hadleClickSelection('posts')}>
                {selection == 'posts' && (
                    <>
                        <BsFillGridFill className='iconsPost selection' />
                        <p className='selection'>Posts</p>
                    </>
                )}
                {selection != 'posts' && (
                    <>
                        <BsGrid className='iconsPost' />
                        <p>Posts</p>
                    </>
                )}

            </div>
            <div className='divSelectionPosts flex' onClick={() => hadleClickSelection('mentions')}>
                {selection == 'mentions' && (
                    <>
                        <BsFillFilePersonFill className='iconsPost selection' />
                        <p className='selection'>Mentions</p>
                    </>
                )}
                {selection != 'mentions' && (
                    <>
                        <BsFilePerson className='iconsPost' />
                        <p>Mentions</p>
                    </>
                )}

            </div>
            <div className='divSelectionPosts flex' onClick={() => hadleClickSelection('saves')}>
                {selection == 'saves' && (
                    <>
                        <MdOutlineBookmark className='iconsPost selection' />
                        <p className='selection'>Saves</p>
                    </>
                )}
                {selection != 'saves' && (
                    <>
                        <MdBookmarkBorder className='iconsPost' />
                        <p>Saves</p>
                    </>
                )}

            </div>
        </nav>
    )
}

export default navbarProfile;