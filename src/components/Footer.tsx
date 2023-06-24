"use client"
import React from "react"
import { BsChevronDown, BsChevronRight, BsInstagram, BsWhatsapp } from "react-icons/bs"
import CustomButtom from "./CustomButtom"
import logo from "../assets/logo.jpg"
import Image from "next/image"

interface menu {
   name: string
   label: string
   options: string[]
}
/**
 *
 * Footer of website. It includes links to shop,
 * contact links and links to some articles.
 * @return {React.JSX.Element}: Website Footer
 */
function Footer() {
   const [activeMenus, setActiveMenus] = React.useState<string[]>([])

   const availableMenus: menu[] = [
      {
         name: "infos",
         label: "A propos du club",
         options: ["Le club", "Le blob", "FAQ"],
      },
      {
         name: "rental",
         label: "Location",
         options: ["Location sacs de louis vuitton", "Location sac a bas prix"],
      },
   ]
   const toggle = (menuName: string): void => {
      if (activeMenus.includes(menuName))
         setActiveMenus((prev) => prev.filter((name) => name != menuName))
      else setActiveMenus((prev) => [...prev, menuName])
   }
   return (
      <footer className='w-full bg-swag-yellow flex flex-col font-bold lg:px-28 lg:pb-6 text-lg'>
         <div className='flex flex-col lg:flex-row'>
            <div className='items-center flex justify-center w-full'>
               <Image
                  src={logo.src}
                  width='200'
                  height='200'
                  alt='logo'
                  className='w-[100px] md:w-[170px] h-auto mt-4'
               />
            </div>

            <div className='flex justify-center items-center mt-8  mb-4 lg:justify-start lg:my-0'>
               <div className=''>
                  <div className='text-lg hidden lg:block uppercase lg:w-72'>
                     {" "}
                     Payements securisés
                  </div>
                  <div className='flex'>
                     {" "}
                     <div className='mr-4'>
                        <svg
                           width='20'
                           height='24'
                           fill='none'
                           xmlns='http://www.w3.org/2000/svg'
                           role='img'
                        >
                           <path
                              d='M17 8h-1V6.01A5.95 5.95 0 0 0 10.113 0h-.164A5.957 5.957 0 0 0 4 5.892V8H3a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V11a3 3 0 0 0-3-3Zm-6 9.816V20H9v-2.184a3 3 0 1 1 2 0ZM14 8H6V5.911A3.955 3.955 0 0 1 9.95 2h.139A3.95 3.95 0 0 1 14 6v2Z'
                              fill='#000'
                           ></path>
                        </svg>
                     </div>
                     <div className='mr-4'>
                        <svg
                           width='40'
                           height='20'
                           fill='none'
                           xmlns='http://www.w3.org/2000/svg'
                           role='img'
                        >
                           <path
                              d='M2.184 6.99.064.515h.909L1.989 3.7c.281.882.52 1.656.692 2.43h.022c.173-.753.454-1.57.735-2.408L4.54.516h.908L3.114 6.99h-.93ZM5.903 4.817c.021 1.14.756 1.613 1.6 1.613.605 0 .973-.107 1.297-.236l.151.602c-.302.129-.821.28-1.556.28-1.449 0-2.292-.947-2.292-2.345 0-1.398.821-2.516 2.184-2.516 1.535 0 1.924 1.333 1.924 2.194 0 .172-.022.3-.022.387l-3.286.021Zm2.486-.602C8.411 3.677 8.173 2.84 7.2 2.84c-.865 0-1.232.795-1.297 1.376h2.486ZM9.881 3.785c0-.538 0-1.01-.043-1.44h.735l.022.902h.043c.216-.623.735-1.01 1.297-1.01.087 0 .173 0 .238.021v.796c-.087-.022-.173-.022-.281-.022-.605 0-1.016.452-1.146 1.076a2.113 2.113 0 0 0-.043.387v2.473h-.844V3.785h.022ZM13.643 1.032c0 .28-.194.516-.54.516a.51.51 0 0 1-.52-.516c0-.3.217-.537.541-.537.303 0 .52.236.52.537Zm-.951 1.312h.843V6.99h-.843V2.344ZM14.66 6.99v-4h-.65v-.646h.65V2.13c0-.645.15-1.247.54-1.634.324-.301.735-.43 1.146-.43.303 0 .562.064.735.129l-.108.645a1.197 1.197 0 0 0-.54-.108c-.714 0-.909.624-.909 1.355v.258h1.125v.645h-1.125v4h-.864ZM18.4 1.032c.022.28-.195.516-.54.516a.51.51 0 0 1-.52-.516c0-.3.217-.537.541-.537.324 0 .519.236.519.537Zm-.951 1.312h.843V6.99h-.843V2.344ZM19.805 4.817c.022 1.14.757 1.613 1.6 1.613.606 0 .973-.107 1.298-.236l.151.602c-.303.129-.822.28-1.557.28-1.448 0-2.292-.947-2.292-2.345 0-1.398.822-2.516 2.184-2.516 1.535 0 1.924 1.333 1.924 2.194 0 .172-.021.3-.021.387l-3.287.021Zm2.487-.602c0-.538-.216-1.376-1.19-1.376-.864 0-1.232.795-1.297 1.376h2.487ZM27.827.172v5.613c0 .409 0 .882.043 1.204h-.757l-.043-.817h-.021c-.26.516-.822.903-1.6.903-1.125 0-1.99-.946-1.99-2.365 0-1.549.952-2.495 2.098-2.495.713 0 1.189.344 1.405.71h.022V.172h.843Zm-.843 4.065c0-.108 0-.258-.043-.366-.13-.538-.584-.99-1.233-.99-.886 0-1.405.775-1.405 1.807 0 .946.454 1.72 1.383 1.72.563 0 1.082-.365 1.255-1.01.021-.108.043-.237.043-.366v-.795ZM30.962 6.99c.022-.323.043-.796.043-1.205V.172h.844v2.925h.021c.303-.516.844-.86 1.6-.86 1.168 0 1.99.967 1.968 2.365 0 1.656-1.06 2.495-2.097 2.495-.67 0-1.211-.258-1.557-.882h-.022l-.043.774h-.757Zm.887-1.872c0 .108.021.215.043.301.173.581.649.99 1.276.99.886 0 1.427-.731 1.427-1.785 0-.925-.476-1.72-1.384-1.72-.584 0-1.124.386-1.297 1.032a1.49 1.49 0 0 0-.044.344v.838h-.021ZM36.368 2.344l1.016 2.753c.108.3.216.666.303.946h.021c.087-.28.173-.645.303-.968l.93-2.73h.908l-1.276 3.31c-.605 1.592-1.016 2.41-1.6 2.904-.41.366-.822.516-1.038.538l-.216-.71c.216-.064.497-.193.735-.408.238-.173.519-.517.714-.947a.494.494 0 0 0 .065-.193.7.7 0 0 0-.065-.215l-1.73-4.28h.93Z'
                              fill='#000'
                           ></path>
                           <path
                              d='m14.162 10.15-2.573 6.474-1.038-5.506c-.13-.623-.605-.968-1.146-.968H5.19l-.065.28c.865.194 1.838.495 2.444.817.367.194.475.366.583.839l1.968 7.591h2.638l4.021-9.527h-2.616ZM17.838 10.15l-2.054 9.527h2.486l2.033-9.527h-2.465ZM23.568 12.796c0-.344.345-.71 1.059-.796.346-.043 1.34-.086 2.443.43l.433-2.021c-.606-.215-1.363-.43-2.314-.43-2.443 0-4.173 1.29-4.194 3.16-.022 1.377 1.232 2.13 2.162 2.582.973.473 1.297.752 1.275 1.182 0 .645-.778.925-1.47.925-1.254.021-1.967-.344-2.551-.602l-.454 2.086c.584.258 1.643.494 2.746.494 2.594 0 4.302-1.268 4.302-3.268.044-2.473-3.46-2.624-3.437-3.742ZM30.724 16.301l1.32-3.57.734 3.57h-2.054Zm.952-6.15c-.476 0-.887.28-1.06.688l-3.719 8.817h2.595l.519-1.42h3.178l.303 1.42h2.292l-1.99-9.527h-2.118v.021Z'
                              fill='#1B00DF'
                           ></path>
                        </svg>
                     </div>
                     <div>
                        <svg
                           width='65'
                           height='20'
                           fill='none'
                           xmlns='http://www.w3.org/2000/svg'
                           role='img'
                        >
                           <path
                              d='M5.722 13.55a4.632 4.632 0 0 0-1.063-.505c-.369-.12-.755-.18-1.158-.18-.264 0-.505.029-.724.084a1.77 1.77 0 0 0-.562.239c-.157.104-.278.23-.365.375a.949.949 0 0 0-.13.493c0 .167.038.31.113.427a.925.925 0 0 0 .325.3c.141.081.314.148.517.202.204.053.434.099.69.136l.548.074c.32.046.633.116.938.211.306.095.578.228.817.399.24.17.432.385.577.643.145.258.217.572.217.94 0 .406-.084.765-.254 1.076-.17.312-.4.574-.69.786-.29.213-.626.375-1.008.485-.383.11-.79.165-1.219.165a5.764 5.764 0 0 1-1.687-.27c-.28-.09-.55-.201-.806-.334a3.438 3.438 0 0 1-.69-.467l.696-1.025c.136.125.299.241.49.347a4.224 4.224 0 0 0 1.991.53c.26 0 .503-.026.727-.08a1.97 1.97 0 0 0 .585-.233c.166-.103.297-.227.393-.373a.874.874 0 0 0 .144-.493c0-.311-.152-.549-.455-.712-.304-.163-.745-.285-1.326-.365l-.616-.085a4.79 4.79 0 0 1-.862-.205 2.49 2.49 0 0 1-.751-.401 1.936 1.936 0 0 1-.532-.65c-.134-.26-.2-.575-.2-.948 0-.398.082-.752.246-1.062.163-.31.387-.57.67-.78.282-.211.613-.372.991-.481.379-.11.783-.166 1.213-.166.576 0 1.097.077 1.562.231.466.154.898.364 1.298.63l-.65 1.041Zm4.313.609c.376 0 .722.07 1.037.207.314.14.584.335.808.588.224.252.4.554.526.905s.19.74.19 1.165a4.812 4.812 0 0 1-.024.444H8.571c.037.247.107.457.209.632a1.442 1.442 0 0 0 .848.678c.177.053.361.08.553.08.272 0 .544-.05.817-.151.274-.1.523-.242.75-.425l.587.849a2.927 2.927 0 0 1-1.054.598 3.964 3.964 0 0 1-1.173.17c-.407 0-.78-.068-1.12-.204a2.538 2.538 0 0 1-.875-.58 2.62 2.62 0 0 1-.571-.907 3.263 3.263 0 0 1-.204-1.179c0-.425.066-.814.198-1.167.132-.353.317-.656.554-.908.238-.253.52-.448.85-.587.33-.139.695-.208 1.095-.208Zm-.023 1.06c-.211 0-.398.031-.562.096a1.224 1.224 0 0 0-.424.276c-.119.12-.216.262-.291.427a2.037 2.037 0 0 0-.159.544h2.81c-.065-.425-.215-.756-.453-.99-.237-.236-.544-.354-.921-.354Zm6.28-1.06c.407 0 .785.073 1.136.219.35.146.646.364.887.652l-.757.814a2.275 2.275 0 0 0-.6-.418 1.637 1.637 0 0 0-.7-.145c-.226 0-.438.043-.633.128a1.513 1.513 0 0 0-.509.358 1.664 1.664 0 0 0-.336.553 2 2 0 0 0-.122.71c0 .257.04.494.122.708.08.215.193.4.336.553.143.153.313.273.509.358.195.086.407.128.633.128.26 0 .503-.054.729-.162.226-.108.426-.244.599-.407l.73.82a2.397 2.397 0 0 1-.894.652c-.346.147-.723.22-1.13.22-.43 0-.82-.073-1.17-.22a2.676 2.676 0 0 1-.9-.603 2.682 2.682 0 0 1-.576-.909 3.115 3.115 0 0 1-.203-1.139c0-.41.068-.79.203-1.14.136-.348.328-.651.577-.907.248-.256.548-.458.898-.604.351-.146.741-.22 1.17-.22Zm8.082 3.286c0 .433-.071.805-.214 1.116a2.169 2.169 0 0 1-.566.764 2.262 2.262 0 0 1-.802.435 3.13 3.13 0 0 1-1.854 0 2.29 2.29 0 0 1-.806-.435 2.119 2.119 0 0 1-.565-.764c-.142-.311-.212-.684-.212-1.116v-3.144h1.187v3.036c0 .262.034.485.101.669.068.184.162.333.28.447.12.114.26.197.421.248.163.05.336.076.52.076.185 0 .358-.025.52-.076.163-.052.303-.134.422-.248.118-.114.212-.263.28-.447.067-.184.101-.407.101-.67v-3.035h1.187v3.144Zm4.313-3.286c.18 0 .344.012.489.037.145.024.285.063.421.116l-.283 1.18a1.688 1.688 0 0 0-.435-.149 2.313 2.313 0 0 0-.463-.051c-.189 0-.362.032-.52.097-.159.065-.294.16-.407.285a1.347 1.347 0 0 0-.266.46c-.064.183-.096.39-.096.622v3.001h-1.182v-5.456h1.17v.615c.181-.262.406-.454.673-.575.268-.122.567-.182.899-.182Zm3.968 0c.377 0 .723.07 1.038.207.314.14.584.335.808.588.224.252.399.554.526.905.125.351.188.74.188 1.165a3.932 3.932 0 0 1-.023.444h-4c.037.247.106.457.208.632s.225.318.367.43c.144.112.304.195.481.247.177.054.362.08.553.08.272 0 .544-.05.817-.15.274-.1.523-.242.75-.425l.587.849a2.929 2.929 0 0 1-1.054.598 3.962 3.962 0 0 1-1.173.17 2.98 2.98 0 0 1-1.119-.204 2.536 2.536 0 0 1-.876-.58 2.617 2.617 0 0 1-.57-.907 3.258 3.258 0 0 1-.204-1.179c0-.425.066-.814.198-1.167.131-.353.316-.656.553-.908.238-.253.521-.448.851-.587.33-.139.695-.208 1.094-.208Zm-.023 1.06c-.21 0-.398.031-.562.096a1.228 1.228 0 0 0-.424.276c-.119.12-.216.262-.29.427a2.036 2.036 0 0 0-.16.544h2.81c-.064-.425-.215-.756-.452-.99-.238-.236-.544-.354-.922-.354Zm7.682-3.584c.35 0 .69.038 1.017.114.329.077.633.186.916.33.282.146.54.32.769.528.23.207.422.439.576.698l-1.067.717a2.604 2.604 0 0 0-.93-.843 2.65 2.65 0 0 0-1.28-.307c-.404 0-.777.07-1.12.21-.343.14-.639.338-.888.593-.248.254-.443.56-.584.917-.142.357-.212.75-.212 1.179 0 .429.07.822.212 1.179a2.604 2.604 0 0 0 1.472 1.509c.343.14.716.21 1.12.21.47 0 .893-.1 1.268-.301.375-.201.687-.482.936-.843l1.04.769c-.17.25-.368.474-.596.672-.228.197-.48.366-.758.507a3.95 3.95 0 0 1-.893.322c-.319.074-.651.11-.998.11a4.39 4.39 0 0 1-1.673-.31 3.88 3.88 0 0 1-1.311-.862 3.915 3.915 0 0 1-.854-1.31 4.388 4.388 0 0 1-.305-1.652c0-.597.102-1.147.305-1.652a3.91 3.91 0 0 1 .854-1.31 3.881 3.881 0 0 1 1.311-.862 4.383 4.383 0 0 1 1.673-.312Zm6.981 2.524c.418 0 .805.073 1.161.219a2.762 2.762 0 0 1 1.535 1.512c.147.35.22.73.22 1.14 0 .41-.073.79-.22 1.138a2.766 2.766 0 0 1-1.535 1.512c-.356.147-.743.22-1.161.22-.419 0-.806-.073-1.162-.22a2.8 2.8 0 0 1-.921-.603 2.786 2.786 0 0 1-.608-.909 2.905 2.905 0 0 1-.22-1.139c0-.41.073-.79.22-1.14.148-.348.35-.651.608-.907s.565-.458.921-.604c.356-.146.743-.22 1.162-.22Zm0 1.122a1.75 1.75 0 0 0-.673.128 1.59 1.59 0 0 0-.893.911c-.087.215-.13.451-.13.71 0 .257.043.494.13.708a1.6 1.6 0 0 0 .893.911c.207.086.431.128.673.128.24 0 .465-.042.672-.128.207-.085.388-.205.54-.358.153-.154.272-.338.36-.553.086-.214.13-.45.13-.709 0-.258-.044-.494-.13-.709a1.664 1.664 0 0 0-.36-.553 1.628 1.628 0 0 0-.54-.358 1.747 1.747 0 0 0-.672-.128Zm6.472-1.122c.388 0 .721.073 1 .219.28.146.513.341.702.584v-3.406h1.18v8.201h-1.18v-.655a2.098 2.098 0 0 1-.702.581c-.279.145-.612.217-1 .217a2.629 2.629 0 0 1-1.922-.81 2.748 2.748 0 0 1-.576-.907 3.095 3.095 0 0 1-.21-1.154c0-.417.07-.802.21-1.153a2.76 2.76 0 0 1 .576-.909 2.642 2.642 0 0 1 1.922-.808Zm.141 1.122a1.538 1.538 0 0 0-1.198.515c-.14.158-.247.343-.322.556a2.016 2.016 0 0 0-.113.677c0 .24.037.465.113.678.075.213.183.398.322.555a1.538 1.538 0 0 0 1.198.516c.245 0 .467-.045.667-.134.2-.09.371-.212.515-.368.143-.155.254-.339.333-.552.079-.212.119-.444.119-.695 0-.25-.04-.482-.12-.694a1.657 1.657 0 0 0-.332-.553 1.55 1.55 0 0 0-1.182-.501Zm6.676-1.122c.377 0 .722.07 1.037.207.314.14.584.335.808.588.225.252.4.554.526.905s.19.74.19 1.165a5.096 5.096 0 0 1-.023.444H59.12c.037.247.107.457.209.632s.224.318.367.43c.143.112.303.195.48.247.178.054.363.08.554.08.272 0 .544-.05.817-.15.273-.1.523-.242.75-.425l.587.849a2.932 2.932 0 0 1-1.054.598c-.371.114-.762.17-1.173.17a2.98 2.98 0 0 1-1.12-.204 2.537 2.537 0 0 1-.875-.58 2.627 2.627 0 0 1-.57-.907 3.26 3.26 0 0 1-.204-1.179c0-.425.065-.814.197-1.167.132-.353.317-.656.554-.908.238-.253.521-.448.85-.587.331-.139.695-.208 1.095-.208Zm3.124 5.598v-.274h.11v-.056h-.28v.056h.11v.274h.06Zm.543 0v-.33h-.085l-.099.227-.099-.228h-.085v.331h.06v-.25l.093.216h.063l.092-.216v.25h.06Zm-3.69-4.539c-.211 0-.398.032-.562.097a1.228 1.228 0 0 0-.425.276c-.118.12-.215.262-.29.427a2.025 2.025 0 0 0-.159.544h2.81c-.065-.425-.215-.756-.452-.99-.238-.236-.545-.354-.922-.354Z'
                              fill='#F79E1B'
                           ></path>
                           <path
                              d='M9.611 8.507H8.286V1.702L5.89 7.697H4.492l-2.398-5.93v6.74H.77V.237h2.035L5.19 6.143 7.577.236h2.034v8.27Zm6.977 0h-1.225v-.68a2.169 2.169 0 0 1-.727.603c-.29.15-.636.225-1.038.225a2.739 2.739 0 0 1-2.591-1.782 3.21 3.21 0 0 1-.217-1.196c0-.433.072-.832.217-1.196.144-.364.344-.679.598-.942a2.74 2.74 0 0 1 1.993-.84c.402 0 .748.077 1.038.228.289.152.531.354.727.605v-.685h1.225v5.66Zm-2.844-4.643a1.595 1.595 0 0 0-1.243.535 1.731 1.731 0 0 0-.334.575c-.078.221-.117.455-.117.703 0 .248.039.483.117.703.079.22.19.413.335.576.144.164.321.293.53.39.21.096.447.145.713.145.254 0 .484-.046.691-.139.207-.093.385-.22.534-.381.148-.162.264-.352.346-.573.082-.22.123-.46.123-.72 0-.261-.041-.501-.123-.722a1.73 1.73 0 0 0-.346-.573 1.613 1.613 0 0 0-1.226-.52Zm8.472.401a3.391 3.391 0 0 0-.733-.319A4.336 4.336 0 0 0 21 3.828a2.84 2.84 0 0 0-.52-.047c-.335 0-.596.062-.782.186-.186.124-.278.287-.278.488 0 .098.024.18.073.247.049.068.114.123.196.166.083.044.18.078.293.104.114.025.235.048.364.067l.58.089c.614.09 1.093.27 1.437.54.344.27.516.647.516 1.132a1.623 1.623 0 0 1-.672 1.332c-.216.163-.484.29-.803.381-.318.09-.679.135-1.081.135-.145 0-.313-.008-.505-.026a4.192 4.192 0 0 1-1.266-.328 3.013 3.013 0 0 1-.639-.372l.569-.927c.101.079.212.152.33.22.12.07.255.131.405.184.15.053.317.096.499.127.181.032.388.047.618.047.422 0 .741-.061.956-.186.215-.123.323-.292.323-.505 0-.16-.079-.294-.235-.398-.157-.105-.403-.18-.739-.228l-.586-.077c-.626-.086-1.1-.27-1.422-.552-.322-.281-.484-.65-.484-1.108 0-.28.054-.532.162-.756.107-.224.261-.414.463-.57.201-.155.445-.275.73-.36.285-.085.608-.127.967-.127.442 0 .858.052 1.25.157.39.104.732.25 1.025.44l-.528.962Zm5.816-.295h-2.151v2.464c0 .188.023.35.07.484a.91.91 0 0 0 .19.328c.08.085.174.147.282.186.107.039.223.059.349.059.191 0 .386-.037.583-.113.198-.074.38-.165.548-.271l.487.986a3.838 3.838 0 0 1-.765.396c-.284.11-.603.166-.959.166-.637 0-1.133-.178-1.486-.535-.354-.356-.53-.91-.53-1.663V3.97h-1.12V2.848h1.12V1.134h1.23v1.714h2.152V3.97Zm3.77-1.27c.39 0 .75.072 1.076.215.326.144.606.347.839.61.232.26.413.574.545.938.13.365.196.767.196 1.208a4.887 4.887 0 0 1-.023.461h-4.151c.039.256.11.475.216.656.106.181.233.33.381.446.149.116.315.202.499.257.184.055.375.082.574.082.282 0 .564-.052.848-.156.283-.104.542-.25.777-.44l.61.88a3.048 3.048 0 0 1-1.094.62c-.385.119-.79.178-1.216.178-.423 0-.81-.071-1.162-.213a2.627 2.627 0 0 1-.908-.602 2.722 2.722 0 0 1-.593-.94 3.386 3.386 0 0 1-.21-1.223c0-.44.068-.844.204-1.21.137-.367.329-.681.575-.943.247-.262.54-.465.883-.609.341-.143.72-.215 1.134-.215Zm-.023 1.099c-.22 0-.414.033-.584.1-.17.067-.317.162-.44.286a1.512 1.512 0 0 0-.302.444c-.078.17-.132.36-.164.564h2.914c-.066-.441-.222-.784-.469-1.028-.246-.244-.565-.366-.955-.366Zm6.924-1.1c.188 0 .356.014.507.04.15.025.296.065.436.12l-.293 1.223a1.739 1.739 0 0 0-.451-.153 2.408 2.408 0 0 0-.48-.053c-.196 0-.376.033-.54.1a1.138 1.138 0 0 0-.422.295c-.118.13-.21.29-.276.479-.066.189-.1.404-.1.644v3.113H35.86v-5.66h1.214v.638c.188-.271.42-.47.697-.596.278-.126.588-.19.932-.19Zm4.191 0c.423 0 .816.077 1.179.228.364.152.67.378.92.677l-.785.845c-.2-.19-.406-.334-.62-.435-.217-.1-.459-.15-.729-.15-.234 0-.453.044-.656.132-.203.089-.38.213-.528.373-.148.16-.265.35-.348.572a2.054 2.054 0 0 0-.127.736c0 .268.042.513.127.736.084.222.2.413.348.573.149.16.325.283.528.372.203.089.422.133.656.133.27 0 .522-.057.756-.169a2.42 2.42 0 0 0 .622-.422l.756.85c-.257.3-.567.525-.925.677a2.99 2.99 0 0 1-1.173.228 3.12 3.12 0 0 1-1.214-.228 2.762 2.762 0 0 1-.932-.626 2.785 2.785 0 0 1-.598-.942 3.233 3.233 0 0 1-.211-1.182c0-.425.07-.819.211-1.182.14-.362.34-.676.598-.942.258-.266.569-.474.932-.626a3.122 3.122 0 0 1 1.213-.227Zm8.631 5.808H50.3v-.68a2.169 2.169 0 0 1-.727.603c-.29.15-.636.225-1.038.225a2.737 2.737 0 0 1-1.993-.84 2.855 2.855 0 0 1-.598-.942 3.219 3.219 0 0 1-.218-1.196c0-.433.073-.832.218-1.196.144-.364.343-.679.597-.942a2.737 2.737 0 0 1 1.993-.84c.403 0 .75.077 1.039.228.289.152.531.354.727.605v-.685h1.225v5.66Zm-2.844-4.643a1.593 1.593 0 0 0-1.243.535 1.739 1.739 0 0 0-.334.575c-.078.221-.117.455-.117.703 0 .248.04.483.117.703.078.22.19.413.335.576.144.164.32.293.53.39.21.096.447.145.712.145.254 0 .485-.046.692-.139.207-.093.385-.22.534-.381.148-.162.264-.352.346-.573.082-.22.123-.46.123-.72 0-.261-.04-.501-.123-.722a1.727 1.727 0 0 0-.346-.573 1.612 1.612 0 0 0-1.226-.52ZM56.174 2.7c.188 0 .357.013.507.038.15.026.296.066.437.121l-.293 1.223a1.732 1.732 0 0 0-.451-.153 2.417 2.417 0 0 0-.481-.053c-.196 0-.375.033-.54.1a1.135 1.135 0 0 0-.422.295c-.117.13-.209.29-.275.479-.067.189-.1.404-.1.644v3.113H53.33v-5.66h1.213v.638c.188-.271.42-.47.698-.596a2.23 2.23 0 0 1 .932-.19Zm4.022 0c.403 0 .749.076 1.038.227.29.152.531.354.727.606V0h1.225v8.507h-1.225v-.68a2.169 2.169 0 0 1-.727.603c-.29.15-.635.225-1.038.225a2.737 2.737 0 0 1-1.993-.84 2.866 2.866 0 0 1-.598-.942 3.22 3.22 0 0 1-.217-1.196c0-.433.073-.832.217-1.196.145-.364.344-.679.598-.942a2.739 2.739 0 0 1 1.993-.84Zm4.421 5.284a.368.368 0 0 1 .335.22.345.345 0 0 1 0 .279.355.355 0 0 1-.194.191.36.36 0 0 1-.401-.077.372.372 0 0 1-.077-.114.343.343 0 0 1-.029-.14.367.367 0 0 1 .222-.332.365.365 0 0 1 .144-.027Zm0 .64a.268.268 0 0 0 .195-.082.275.275 0 0 0 .081-.199.279.279 0 0 0-.386-.258.27.27 0 0 0-.148.149.286.286 0 0 0 .148.368c.034.014.071.022.11.022Zm.021-.449a.15.15 0 0 1 .1.029c.022.019.033.045.033.078a.09.09 0 0 1-.027.068.131.131 0 0 1-.079.033l.11.126h-.086l-.1-.125h-.033v.125h-.071v-.334h.153Zm-.082.063v.089h.082a.078.078 0 0 0 .044-.012c.011-.007.017-.018.017-.033a.037.037 0 0 0-.017-.033.08.08 0 0 0-.044-.011h-.082Zm-4.213-4.374a1.597 1.597 0 0 0-1.243.535 1.742 1.742 0 0 0-.334.575c-.078.221-.118.455-.118.703 0 .248.04.483.118.703.078.22.19.413.334.576.145.164.321.293.53.39.21.096.447.145.713.145.254 0 .484-.046.692-.139.207-.093.385-.22.533-.381.149-.162.264-.352.346-.573.083-.22.124-.46.124-.72 0-.261-.041-.501-.124-.722a1.722 1.722 0 0 0-.346-.573 1.613 1.613 0 0 0-1.225-.52Z'
                              fill='#EB001B'
                           ></path>
                        </svg>
                     </div>
                  </div>
               </div>
            </div>

            <div className='w-full flex flex-col items-center py-6 justify-center'>
               <span className='text-lg hidden lg:block uppercase lg:w-120'>
                  Suivez nous dès maintenant
               </span>
               <div className='flex gap-5'>
                  <CustomButtom color='black' background='white' rounded>
                     <BsInstagram size={22} />
                  </CustomButtom>
                  <CustomButtom color='black' background='white' rounded>
                     <BsWhatsapp size={22} />
                  </CustomButtom>
               </div>
            </div>
         </div>

         <hr className='border-black hidden w-full mt-8 mb-4 px-6 lg:inline-block' />

         <div className='mb-6 mx-6 lg:hidden'>
            {availableMenus.map(({ name, label, options }) => (
               <div className='w-full' key={name + JSON.stringify(options)}>
                  <button
                     className='border-t pt-2 pb-1 w-full text-left border-x-0 border-black flex items-center justify-between'
                     onClick={() => toggle(name)}
                  >
                     <span className='flex items-center text-center'>{label}</span>
                     {activeMenus.includes(name) ? <BsChevronDown /> : <BsChevronRight />}
                  </button>

                  {activeMenus.includes(name) && (
                     <div className='grid gap-4 font-normal'>
                        {options.map((option) => (
                           <span key={option}>{option} </span>
                        ))}
                     </div>
                  )}
               </div>
            ))}
            <hr className='border-black w-full px-6 inline-bloc' />
         </div>

         <div className='lg:flex text-xl  hidden justify-center gap-12'>
            {availableMenus.map(({ name, label, options }) => (
               <div key={`${name}`}>
                  <span className='flex items-center text-center'>{label}</span>

                  <div className='grid gap-4 font-normal'>
                     {options.map((option) => (
                        <span key={option}>{option} </span>
                     ))}
                  </div>
               </div>
            ))}
         </div>

         <hr className='border-black hidden w-full my-6 px-6 lg:inline-block' />
         <div className='w-full text-center flex flex-col lg:flex-row lg:justify-between gap-4 mb-16'>
            <span className='font-normal text-sm'>
               Copyright &copy; 2023 Bags Club SAS{" "}
            </span>
            <div className='font-normal text-sm flex lg:flex-row flex-col gap-1'>
               <span className='underline underline-offset-2 decoration-slate-700'>
                  Conditions d&apos;utilisation
               </span>

               <span className='underline underline-offset-2 lg:ml-5 decoration-slate-700'>
                  Politique de confidentialité
               </span>
            </div>
         </div>
      </footer>
   )
}

export default Footer
