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
$id = 'request-section-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'request-section';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}
?>
<?php $shortcode = get_field('form_short_code', 'option');?>

<?php $title = get_field('estimate_form_title', 'option');?>
<?php $time = get_field('response_time', 'option');?>
<?php $note = get_field('image_note', 'option');?>
<section id="<?php echo esc_attr($id); ?>" class="estimate-form-section <?php echo esc_attr($className); ?>">
  <div class="content">
    <div class="estimate-form-container white-shadow c-width-58">
      <h2><?php echo $title;?></h2>
      <div class="response-time">Estimated Response Time: <?php echo $time;?></div>
      <?php echo do_shortcode("$shortcode");?>
      <div class="estimate-image-note"><span class="estimate-note-star">*</span><?php echo $note;?></div>
    </div>
  </div>
</section>