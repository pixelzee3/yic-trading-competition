<script>
  import Block from '$lib/components/Block.svelte';
  import SignUpButton from '$lib/components/SignUpButton.svelte';
</script>

<Block>
  <h2 class="text-4xl font-bold">Timeline</h2>
  <!-- Timeline -->
  <div class="mx-auto max-w-2xl mt-8 md:mt-12 lg:mt-16 md:text-xl">
    <div class="relative">
      <div
        class="border-r-2 border-gray-300 absolute h-full top-0"
        style="left: 16px;"
      />

      <!-- Timeline items -->
      <div class="flex justify-between items-start mb-8 md:mb-16">
        <div class="flex items-center">
          <div class="bg-signature rounded-full h-6 w-6 z-10" />
          <div class="ml-4">
            <h3 class="font-bold">Opening Registration</h3>
            <p class="text-gray-500">9 June 2023</p>
          </div>
        </div>
        <!-- <p class="text-gray-500">Description 1</p> -->
      </div>

      <div class="flex justify-between items-start mb-8 md:mb-16">
        <div class="flex items-center">
          <div class="bg-signature rounded-full h-6 w-6 z-10" />
          <div class="ml-4">
            <h3 class="font-bold">Closing Registration</h3>
            <p class="text-gray-500">31 August 2023</p>
          </div>
        </div>
        <!-- <p class="text-gray-500">Description 2</p> -->
      </div>

      <div class="flex justify-between items-start mb-8 md:mb-16">
        <div class="flex items-center">
          <div class="bg-signature rounded-full h-6 w-6 z-10" />
          <div class="ml-4">
            <h3 class="font-bold">Opening Ceremony</h3>
            <p class="text-gray-500">2 September 2023</p>
          </div>
        </div>
        <!-- <p class="text-gray-500">Description 3</p> -->
      </div>

      <div class="flex justify-between items-start mb-8 md:mb-16">
        <div class="flex items-center">
          <div class="bg-signature rounded-full h-6 w-6 z-10" />
          <div class="ml-4">
            <h3 class="font-bold text-signature">Competition</h3>
            <p class="text-gray-500">4 September - 9 October 2023</p>
          </div>
        </div>
        <!-- <p class="text-gray-500">Description 4</p> -->
      </div>

      <div class="flex justify-between items-start">
        <div class="flex items-center">
          <div class="bg-signature rounded-full h-6 w-6 z-10" />
          <div class="ml-4">
            <h3 class="font-bold">Closing Ceremony</h3>
            <p class="text-gray-500">10 October 2023</p>
          </div>
        </div>
        <p class="text-gray-500">Date is subject to change</p>
      </div>
    </div>
  </div>
  <SignUpButton class="mt-4 md:mt-8" signature />
</Block>
