<template>
    <div>
        <Header></Header>
        <Aside></Aside>    
        <Main></Main>
    </div>
</template>
<script>
import Aside from './components/Aside'
import Header from './components/Header'
import Main from './components/Main'
export default {
    data() {
        return {

        }
    },
    components:{
        Aside,
        Header,
        Main
    }
}
</script>
