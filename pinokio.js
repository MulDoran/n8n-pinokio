{\rtf1\ansi\ansicpg1252\cocoartf2818
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // pinokio.js\
module.exports = \{\
  version: "2.0",\
  title: "n8n Workflow Automation",\
  description: "Install and run n8n workflow automation platform locally",\
  icon: "icon.png", // Optional: include an icon\
  menu: async (kernel, info) => \{\
    let installed = info.exists("n8n-data")\
    if (installed) \{\
      return [\{\
        default: true,\
        text: "Start n8n",\
        href: "start.json",\
        icon: "fa-solid fa-play"\
      \}, \{\
        text: "Install",\
        href: "install.json \{\
        text: "Update",\
        href: "update.json",\
        icon: "fa-solid fa-sync"\
      \}]\
    \} else \{\
      return [\{\
        text: "Start n8n",\
        href: "start.json",\
        icon: "fa-solid fa-play"\
      \}, \{\
        default: true,\
        text: "Install",\
        href: "install.json", \
        icon: "fa-solid fa-download"\
      \}]\
    \}\
  \}\
\}\
}