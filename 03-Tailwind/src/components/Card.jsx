import React from "react"

function Card(prop){
  console.log(prop)
  return(
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 m-2">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={prop.src} alt="" width="384" height="512"/>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        {prop.dialog}
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
       {prop.channel || "WAZAPZZZZZZZ"}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        {prop.type}
      </div>
    </figcaption>
  </div>
</figure>
  )
}

export default Card