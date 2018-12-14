import Content from '../src/components/content';
import questionAnswerInfo from '../src/components/questionAnswerInfo';
import Form from './components/form';
export const routes = [
    { path:'/', component: Form , key: Form},
    { path:'/info' , component: questionAnswerInfo , key:questionAnswerInfo },
    { path:'/questions' , component: Content , key:Content }
]
