import './style.css'

import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa6";
import { GoPaperAirplane } from "react-icons/go";
import { MdBookmarkBorder } from "react-icons/md";
import { MdOutlineBookmark } from "react-icons/md";

import { PiSealCheckDuotone } from "react-icons/pi";
import { BiDotsHorizontalRounded } from "react-icons/bi";

import Carousel from '../carousel';
import { useEffect, useState } from 'react';

const post = (props) => {

    const [username, setUsername] = useState(props.username);

    const [likes, setLikes] = useState(props.likes);
    const [isLike, setIsLike] = useState(false);

    const handleClickHeart = (like) => {
        if (isLike) {
            setLikes(like - 1);
            setIsLike(false);
        } else {
            setLikes(like + 1);
            setIsLike(true);
        }
    }

    const [isSave, setIsSave] = useState(false);

    const handleClickSave = () => {
        isSave ? setIsSave(false) : setIsSave(true);
    }

    const [commentsCount, setCommentsCount] = useState(props.commentsCount);
    const [isShowButtonShare, setIsShowButtonShare] = useState(false);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const handleChangeComment = event => {
        event.target.value == '' ? setIsShowButtonShare(false) : setIsShowButtonShare(true);
        setComment(event.target.value);
    }

    const handleClickComment = (comment, commentsCount) => {
        const commentData = {
            name: "kaue", // ========ALTERAR PARA O NOME DA PESSOA QUE ESTIVER UTILIZANDO A PAGINA========
            comment: comment
        };
        setComments([...comments, commentData]);
        setComment('');
        setIsShowButtonShare(false)
        setCommentsCount(commentsCount+1);
        console.log(commentsCount)
    }

    const postComments = comments.map((comment, key) => <p key={key}><span className='spanUsernamePost'>{comment.name}</span> {comment.comment}</p>);

    return (
        <article>
            <section className='sectionProfilePost flexCenter'>
                <div className='divProfileInformation flexCenter'>
                    <div className='flexCenter'>
                        <img className='profileImgPost' src={props.profilePhoto} alt="" />
                    </div>
                    <div className='divUsernameTimePost flexCenter'>
                        <div className='divUsername flexCenter'>
                            <p>@{username}</p>
                            <PiSealCheckDuotone className='iconVerify' />
                        </div>
                        <div className='divTimePost flexCenter'>
                            <span>•</span>
                            <p>{props.timePost}</p>
                        </div>
                    </div>
                </div>
                <div className='divPostbar'>
                    <BiDotsHorizontalRounded className='iconsPost' />
                </div>
            </section>

            <Carousel  srcPhotos={props.srcPhotos} />

            <section className='sectionDescription'>
                <div className='divIconsPost'>
                    <div className='divFirstIcons flexCenter'>
                        <div className='divLikeCounter'>
                            {isLike && (
                                <FaHeart onClick={() => handleClickHeart(likes)} className='iconsPost' />
                            )}
                            {!isLike && (
                                <FaRegHeart onClick={() => handleClickHeart(likes)} className='iconsPost' />
                            )}
                        </div>
                        <FaRegComment className='iconsPost' />
                        <GoPaperAirplane className='iconsPost' />
                    </div>
                    <div className='divSecondIcons flexCenter'>
                        {isSave && (
                            <MdOutlineBookmark className='iconsPost' onClick={handleClickSave} />
                        )}
                        {!isSave && (
                            <MdBookmarkBorder className='iconsPost' onClick={handleClickSave} />
                        )}
                    </div>
                </div>
                    <div className='divDescriptionPost'>
                        <p><span className='spanUsernamePost'>{username}</span> {props.description}</p>
                    </div>

                    <div className='divCounts flexCenter'>
                        <p>Likes {likes}</p>
                        <span>•</span>
                        <p>Comments {commentsCount}</p>
                    </div>

                    <div className='divDescriptionPost'>
                        {postComments}
                    </div>

                <div className='divCommentInputPost'>
                    <input className='inputCommentPost' type='text' placeholder='Add a comment...' onChange={handleChangeComment} value={comment} />
                    {isShowButtonShare && (
                        <button className='buttonShareCommentPost' onClick={() => handleClickComment(comment, commentsCount)}>Share</button>
                    )}
                </div>
            </section>

        </article>
    )
}

export default post;