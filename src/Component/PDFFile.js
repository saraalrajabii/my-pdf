import React from "react"
// import {Page , Text , Image , Document , StyleSheet} from '@react-pdf/renderer'
import { Page, Text, Document, View , Image } from '@react-pdf/renderer';
import logo512 from "./logo512.png"
import logo from "./logo.svg"


const PdfFile=() =>{
return (
<Document >
    <Page>
    <Text >sara</Text>
    <Image src={logo512} />
    <Image src={logo} />
    <Text >my pdf</Text>
    <Text render={({pageNumber , totalPages})=>
    `${pageNumber} /${totalPages} `} />
    </Page>
</Document>
)
}
export default PdfFile ;