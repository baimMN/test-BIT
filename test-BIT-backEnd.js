function getForm(input){
    let  data = ["pro","gram","merit","gramit","program","it","programmer","programmeri","t"]
    let results = []
    let i = 0
    let beforeIndex = 0 
    let aa
    let word = []
    let aaData
    let sameIndex = []
    aa = data.filter((dataas,index) => {
      if(input.includes(dataas) && input.indexOf(dataas) === 0) {
        return true
      }else {
        return false
      }
    })

    for (i = 0; i < aa.length; i++) {
      aaData = aa[i]

      //ilangin awalan
      let zz = data.filter((zzData,zzIndex) => {
        if(zzData === aaData){
          return false
        }else {
          return true
        }
      })

      beforeIndex = aa[i].length - 1

      //cek index > awalan
      let kk = zz.filter((zzData,zzIndex) => {
        if(input.indexOf(zzData) > beforeIndex){
          return true
        }
      })

      //cek data yg indexny sama
      let num = []
      kk.map((kkData,kkIndex) => {
        let hh = kk.filter((ooData,ooIndex) => {
          let nowIndex = input.indexOf(kkData) 
          if(nowIndex === input.indexOf(ooData) && kkData !== ooData && !num.includes(nowIndex)){
            sameIndex.push([kkData,ooData])
            num.push(nowIndex)
          }
        })
      })

      if(sameIndex.length === 0){
        let vva = kk.filter(vvaData => {
          if(aaData === vvaData){
            return false
          }else { 
            return true
          }
        })
        beforeIndex = aaData.length - 1
        vva.map(vData => {
          let nowIndex = input.indexOf(vData) 
          if(input.includes(vData) &&  nowIndex > beforeIndex && nowIndex !== 0){
            word.push(vData)
            beforeIndex = input.indexOf(vData) + vData.length-1
          }
        })

        if(aaData+word.toString().replace(/,/g, '') === input){
          results.push([aaData,...word])
        }
        word = []
        
      }else {
        sameIndex.map(sameData => {
          sameData.map(numData => {
            let vv = kk.filter(vvData => {
              if(numData === vvData){
                return false
              }else { 
                return true
              }
            })

            beforeIndex = aaData.length - 1
            vv.map(vData => {
              let nowIndex = input.indexOf(vData) 
              if(input.includes(vData) &&  nowIndex > beforeIndex && nowIndex !== 0){
                word.push(vData)
                beforeIndex = input.indexOf(vData) + vData.length-1
                console.log(vData,beforeIndex)
              }
            })
            
            if(aaData+word.toString().replace(/,/g, '') === input){
              results.push([aaData,...word])
            }
            word = []
            
          })
        })
      }     
      sameIndex = []
    }
    
    return results
}

console.log(getForm('programit'))
