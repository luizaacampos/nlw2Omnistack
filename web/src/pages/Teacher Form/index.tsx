import React, { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Input from '../../components/input'
import PageHeader from '../../components/PageHeader'
import Textarea from '../../components/textarea'
import Select from '../../components/select'
import api from '../../services/api'

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'


function teacherForm() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory()

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [name, setName] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [avatar, setAvatar] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [whatsapp, setWhatsapp] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [bio, setBio] = useState('');

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [subject, setSubject] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [cost, setCost] = useState('');





    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return {...scheduleItem, [field]: value }
            }

            return scheduleItem
        })
        setScheduleItems(updateScheduleItems)
    }

    function handleCreateClass(e: FormEvent) {
         e.preventDefault()

         api.post('classes', {
             name,
             avatar,
             whatsapp,
             bio,
             subject,
             cost: Number(cost),
             schedule: scheduleItems
         }).then(() => {
             alert('Cadastro realizado com sucesso!')

             history.push('/')
         }).catch(() => {
             alert('Erro no cadastro!')
         })
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
            title="Que incrível que você quer dar aulas!"
            description="O primeiro passo é preencher esse formulário de inscrição"
            />

          <main>
              <form onSubmit={handleCreateClass}>
              <fieldset>
                  <legend>Seus dados</legend>
                    <Input name="name" label="Nome completo" value={name} onChange={(e) => { setName(e.target.value) }}  />
                    <Input name="avatar" label="Avatar" value={avatar} onChange={(e) => { setAvatar(e.target.value) }} />
                    <Input name="whatsapp" label="Whatsapp" value={whatsapp} onChange={(e) => { setWhatsapp(e.target.value) }} /> 
                    <Textarea name="bio" label="Biografia" value={bio} onChange={(e) => { setBio(e.target.value) }} />
              </fieldset>

              <fieldset>
                  <legend>Sobre a aula</legend>
                    <Select
                      name="subject"
                       label="Matéria"
                       value={subject}
                       onChange={(e) => { setSubject(e.target.value) }}
                       options={[
                           { value:'Artes', label: 'Artes' },
                           { value:'Biologia', label: 'Biologia' },
                           { value:'Ciências', label: 'Ciência' },
                           { value:'Educação Física', label: 'Educação Física' },
                           { value:'Física', label: 'Física' },
                           { value:'Geografia', label: 'Geografia' },
                           { value:'História', label: 'História' },
                           { value:'Matemática', label: 'Matemática' },
                           { value:'Português', label: 'Português' },
                           { value:'Quimíca', label: 'Quimíca' },
                       ]}
                        />
                    <Input 
                    value={cost}
                    onChange={(e) => { setCost(e.target.value) }}
                    name="cost" 
                    label="Custo da sua hora/aula" />
              </fieldset>

              <fieldset>
                  <legend>
                      Horários disponíveis
                  <button type="button" onClick={addNewScheduleItem}>
                      + Novo horário
                  </button>
                  </legend>

                  {scheduleItems.map((scheduleItem, index) => {
                      return (
                        <div key={scheduleItem.week_day} className="schedule-item">
                        <Select
                            name="week_day"
                            label="Dia da semana"
                            value={scheduleItem.week_day}
                            onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                            options={[
                                { value:'0', label: 'Domingo' },
                                { value:'1', label: 'Segunda-feira' },
                                { value:'2', label: 'Terça-feira' },
                                { value:'3', label: 'Quarta-feira' },
                                { value:'4', label: 'Quinta-feira' },
                                { value:'5', label: 'Sexta-feira' },
                                { value:'6', label: 'Sábado' },
                            ]}
                                />
                                <Input 
                                name="from" 
                                label="Das" 
                                type="time"
                                value={scheduleItem.from}
                                onChange={e => setScheduleItemValue(index, 'from', e.target.value)} 
                                />
                                <Input 
                                name="to" 
                                label="até" 
                                type="time" 
                                value={scheduleItem.to}
                                onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                />
                      </div>
                      )
                  })}


              </fieldset>
             

              <footer>
                <p>
                    <img src={warningIcon} alt="Aviso importante"/>
                    Importante! <br/>
                    Preencha todos os dados
                </p>
                <button type="submit">
                    Salvar cadastro
                </button>
              </footer>
              </form>

          </main>


    </div>
    )
}

export default teacherForm