import React from "react";
import Card from './Card';
const  Feature =()=>
{
    return(
        <main className="flex justify-center font-roboto flex-wrap p-5 leading-relaxed bg-gradient-to-r from-blue-400 to-blue-900">
    <div className="flex flex-wrap justify-center gap-5">
      <Card
        image="/assets/message.png"
        title="Conversational AI Assistant"
        description="Say Goodbye to Complicated Software!Ask your bussiness assistant to get your work done !Start by saying Hi!!"
        
      />
      <Card
        image="/assets/security.png"
        title="Effortless Fyntl Security "
        description="Save yourself form various fraudent and suspicious activities"
        
      />
      <Card
        image="/assets/vector.png"
        title="Seameless ERP & Invoice Management"
        description="Effortlessely track your pay to employees and manage invoices,freeing up valuable time to focus on your bussiness."
      
      />
      <Card
        image="/assets/grow.png"
        title="Real Time Financial Insights"
        description="Gain a clear understanding your financial health with intrutive dashboard and repos"
       
      />
    </div>
  </main>
    );

}
export default Feature;