<?php

/**
 * Testimonial Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'our-people-section-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'our-people-section';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}?>


<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
  <div class="our-people-anchor" id="our-people"></div>
  <div class="content">
    <h2 class="h1"><?php $title = the_field('title');?></h2>
    <?php if( have_rows('single_person') ): ?>
      <?php while( have_rows('single_person') ): the_row();?>
        <?php $name = get_sub_field('name');?>
        <?php $title = get_sub_field('title');?>
        <?php $image = get_sub_field('image');?>
        <div class="single-person white-shadow">      
          <?php if($name):?>
            <h3><?php echo $name; ?></h3>
          <?php endif;?>
          <?php if($title):?>
            <p><?php echo $title; ?></p>
          <?php endif;?>
          <?php if($image):?>
            <div class="person-image-container">
              <img src='<?php echo $image['url']; ?>' alt='<?php echo $image['alt']; ?>'>
          </div>
          <?php endif;?>
        </div>
      <?php endwhile; ?>  
    <?php endif; ?>
  </div>  
</section>
