<template>
  <div class=''>
    <div class='min-h-screen flex flex-col'>
      <div class='header sticky top-0 bg-primary text-white z-40'>
        <div class='container mx-auto p-4'>
          <div class='flex justify-between relative'>
            <NuxtLink to='/'>
              <h1 class='text-5xl'>CampChaos</h1>
            </NuxtLink>

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
      <div class='container mx-auto py-4 text-center text-white'>
        <span class='font-bold'>Nordre ringvej 8, 2. tv</span> -
        <span class='font-bold'>begger-008@hotmail.com</span> -
        <span class='font-bold'>+45 27 91 51 83</span>
      </div>
    </div>
  </div>
</template>

<style>
</style>
