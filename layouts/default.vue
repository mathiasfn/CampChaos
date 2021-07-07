<template>
  <div class=''>
    <div class='min-h-screen flex flex-col'>
      <div class='header bg-primary text-white'>
        <div class='container mx-auto p-4'>
          <div class='flex justify-between position-relative'>
            <h1>CampChaos</h1>

            <ul class='flex gap-10 items-center text-xl'>
              <li class='cursor-pointer'>
                <NuxtLink to="/">
                  Forside
                </NuxtLink>
              </li>
              <li class='cursor-pointer'>
                <NuxtLink to="/salgs-dyr">
                  Salgs dyr
                </NuxtLink>
              </li>
              <li class='cursor-pointer'>
                <NuxtLink to="/mine-dyr">
                  Mine dyr
                </NuxtLink>
              </li>
              <li class='cursor-pointer'>
                <NuxtLink to="/alle-dyr">
                  Alle dyr
                </NuxtLink>
              </li>
              <li class='cursor-pointer'>
                <NuxtLink to="/kontakt">
                  Kontakt
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class='body bg-red flex-grow'>
        <div class='container mx-auto py-8 px-4'>
          <Nuxt />
        </div>
      </div>
    </div>

    <div class='footer bg-gray-700'>
      <div class='container mx-auto py-4 grid grid-cols-2 text-white'>
        <div>
          <div>Kontakt</div>
          <div>Nordre ringvej 8, 2. tv</div>
          <div>begger-008@hotmail.com</div>
          <div>+45 27 91 51 83</div>
        </div>
        <div>
          Følg med på <span>facebook</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
