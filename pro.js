
      //sidenav
          const sidenav = document.querySelector('.sidenav');
          M.Sidenav.init(sidenav, {});

      //Autocomplete
          const ac = document.querySelector('.autocomplete');
          M.Autocomplete.init(ac,{
          data:{
              "Mumbai": null,
              "Kerala": null,
              "Rajasthan": null,
              "Goa": null,
              "Punjab": null,
              "Himachal Pradesh": null,
              "Uttar Pradesh": null,
              "Gujarat": null,
              "Jammu and Kashmir": null,
              "Karnataka": null,
              "West Bengal": null
            }
          });

      //material boxed
          const mb = document.querySelectorAll('.materialboxed');
          M.Materialbox.init(mb, {});

      //scrollspy
          const ss = document.querySelectorAll('.scrollspy');