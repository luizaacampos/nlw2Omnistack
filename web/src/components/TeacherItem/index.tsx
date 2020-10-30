import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api'

import './styles.css'

export interface Teacher {
    id: number;
    avatar: string;
    bio:string;
    cost:number;
    name: string;
    subject: string;
    whatsapp: string;
}

export interface TeacherItemProps {
    teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    function createNewConection() {
        api.post('connections', {
            user_id: teacher.id
        })
    }


    return (
        <article className="teacher-item">
        <header>
            <img src={teacher.avatar} alt={teacher.name} />
            <div>
             <strong>{teacher.name}</strong>
                <span>{teacher.subject}</span>
            </div>
        </header>
        <p>{teacher.bio}</p>

        <footer>
            <p>
                Preço/hora
                <strong>{teacher.cost}</strong>
            </p>
            <a 
            target="_blank"
            onClick={createNewConection} 
            href={'https://wa.me/${teacher.whatsapp}'}>
                <img src={whatsappIcon} alt="whatsapp"/>
                Entrar em contato
            </a>
        </footer>
    </article>
    )
}

export default TeacherItem